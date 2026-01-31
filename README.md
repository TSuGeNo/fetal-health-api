# Fetal Health Prediction - Flask Backend

A Flask API for predicting fetal health status based on cardiotocography (CTG) data using Machine Learning.

## 🚀 Render Deployment (FREE - No Credit Card Required)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `fetal-health-api` (or any name you prefer)
3. Keep it public

### Step 2: Push Code to GitHub

```bash
cd C:\Users\pradn\Desktop\fetal_android_app
git remote add origin https://github.com/YOUR_USERNAME/fetal-health-api.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Render

1. Go to [Render.com](https://render.com) and sign up (free, no credit card)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account
4. Select your `fetal-health-api` repository
5. Configure the service:
   - **Name**: `fetal-health-api`
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
6. Click **"Create Web Service"**

Your API will be live at: `https://fetal-health-api.onrender.com`

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

## 📱 Android App

The `app/` directory contains an Android Studio project that connects to this API. 

### To use with Render:
1. Deploy the Flask app to Render
2. Update the API URL in `MainActivity.kt`:
   ```kotlin
   val api = remember { FetalHealthApi("https://your-app-name.onrender.com") }
   ```

### To test locally:
Use `http://10.0.2.2:5000` for Android emulator (points to localhost on your machine)

## 📄 License

This project is for educational purposes.
