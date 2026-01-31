# Fetal Health Prediction - Flask Backend

A Flask API for predicting fetal health status based on cardiotocography (CTG) data.

## 🚀 Heroku Deployment

### Prerequisites
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed
- Git installed
- Heroku account

### Deployment Steps

1. **Login to Heroku**
   ```bash
   heroku login
   ```

2. **Create a new Heroku app**
   ```bash
   heroku create your-app-name-fetal-health
   ```

3. **Initialize Git (if not already)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

4. **Deploy to Heroku**
   ```bash
   git push heroku main
   ```
   
   Or if your branch is `master`:
   ```bash
   git push heroku master
   ```

5. **Open the app**
   ```bash
   heroku open
   ```

### Files Required for Heroku
- `Procfile` - Tells Heroku how to run the app
- `requirements.txt` - Python dependencies
- `runtime.txt` - Python version

## 📱 API Endpoints

### Health Check
```
GET /health
```
Response:
```json
{"status": "healthy"}
```

### Predict Fetal Health
```
POST /predict
Content-Type: application/x-www-form-urlencoded
```

**Required Parameters:**
| Parameter | Description |
|-----------|-------------|
| `baseline_value` | Baseline fetal heart rate (bpm) |
| `accelerations` | Number of accelerations per second |
| `uterine_contractions` | Number of uterine contractions per second |
| `light_decelerations` | Number of light decelerations per second |
| `prolongued_decelerations` | Number of prolonged decelerations per second |
| `abnormal_short_term_variability` | Percentage of time with abnormal short term variability |
| `mean_value_of_short_term_variability` | Mean value of short term variability |
| `percentage_of_time_with_abnormal_long_term_variability` | Percentage of time with abnormal long term variability |
| `mean_value_of_long_term_variability` | Mean value of long term variability |
| `histogram_width` | Width of histogram |
| `histogram_min` | Minimum value of histogram |
| `histogram_max` | Maximum value of histogram |
| `histogram_number_of_peaks` | Number of peaks in histogram |
| `histogram_mean` | Mean of histogram |
| `histogram_variance` | Variance of histogram |
| `histogram_tendency` | Tendency of histogram |

**Response:**
```json
{
    "fetal_health": 1,
    "status": "Normal",
    "description": "The fetus appears to be healthy.",
    "color": "green"
}
```

### Health Status Classes
| Class | Status | Description |
|-------|--------|-------------|
| 1 | Normal | The fetus appears to be healthy |
| 2 | Suspect | Further examination may be required |
| 3 | Pathological | Immediate medical attention recommended |

## 🏃 Local Development

1. **Create virtual environment**
   ```bash
   python -m venv venv
   venv\Scripts\activate  # Windows
   source venv/bin/activate  # Mac/Linux
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the server**
   ```bash
   python app.py
   ```

4. **Test the API**
   ```bash
   curl -X POST http://127.0.0.1:5000/predict \
     -d "baseline_value=120" \
     -d "accelerations=0.0" \
     # ... add all other parameters
   ```

## 📱 Android App

The `app/` directory contains an Android Studio project that connects to this API. 

### To use with Heroku:
1. Deploy the Flask app to Heroku
2. Update the API URL in `MainActivity.kt`:
   ```kotlin
   val api = remember { FetalHealthApi("https://your-app-name.herokuapp.com") }
   ```

### To test locally:
Use `http://10.0.2.2:5000` for Android emulator (points to localhost on your machine)

## 📄 License

This project is for educational purposes.
