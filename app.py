from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle
import os

model = pickle.load(open('knn_model.pkl', 'rb'))

app = Flask(__name__)
CORS(app)  # Enable CORS for Android app

# Define required fields for prediction (using underscores to match client request format)
REQUIRED_FIELDS = [
    'baseline_value',
    'accelerations',
    'uterine_contractions',
    'light_decelerations',
    'prolongued_decelerations',
    'abnormal_short_term_variability',
    'mean_value_of_short_term_variability',
    'percentage_of_time_with_abnormal_long_term_variability',
    'mean_value_of_long_term_variability',
    'histogram_width',
    'histogram_min',
    'histogram_max',
    'histogram_number_of_peaks',
    'histogram_mean',
    'histogram_variance',
    'histogram_tendency'
]

# Map prediction class to health status
HEALTH_STATUS = {
    1: {'status': 'Normal', 'description': 'The fetus appears to be healthy.', 'color': 'green'},
    2: {'status': 'Suspect', 'description': 'Further examination may be required.', 'color': 'yellow'},
    3: {'status': 'Pathological', 'description': 'Immediate medical attention recommended.', 'color': 'red'}
}


@app.route('/')
def hello():
    return jsonify({
        'message': 'Fetal Health Prediction API',
        'version': '1.0.0',
        'endpoints': {
            '/predict': 'POST - Predict fetal health status',
            '/health': 'GET - Health check'
        }
    })


@app.route('/health')
def health_check():
    return jsonify({'status': 'healthy'})


@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Collect and validate all input values
        values = []
        missing_fields = []
        invalid_fields = []
        
        for field in REQUIRED_FIELDS:
            raw_value = request.form.get(field)
            
            if raw_value is None or raw_value.strip() == '':
                missing_fields.append(field)
            else:
                try:
                    values.append(float(raw_value))
                except ValueError:
                    invalid_fields.append(f"{field}: '{raw_value}'")
        
        # Return error if there are missing fields
        if missing_fields:
            return jsonify({
                'error': 'Missing required fields',
                'missing_fields': missing_fields
            }), 400
        
        # Return error if there are invalid (non-numeric) fields
        if invalid_fields:
            return jsonify({
                'error': 'Invalid numeric values',
                'invalid_fields': invalid_fields
            }), 400
        
        # Create input array and make prediction
        input_query = np.array([values])
        result = model.predict(input_query)[0]
        
        # Convert numpy int to Python int for JSON serialization
        if hasattr(result, 'item'):
            result = int(result.item())
        else:
            result = int(result)
        
        # Get health status info
        health_info = HEALTH_STATUS.get(result, {
            'status': 'Unknown',
            'description': 'Unable to determine health status.',
            'color': 'gray'
        })
        
        return jsonify({
            'fetal_health': result,
            'status': health_info['status'],
            'description': health_info['description'],
            'color': health_info['color']
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)

