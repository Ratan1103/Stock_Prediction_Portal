<div align="center">

![Stock Prediction Banner](https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=300&fit=crop&crop=center)

# 📈 Stock Prediction Portal
### *LSTM Deep Learning • Django REST API • Real-time Predictions*

<img src="https://cdn-icons-png.flaticon.com/512/2942/2942813.png" width="80" height="80" alt="AI">
<img src="https://static.djangoproject.com/img/logos/django-logo-positive.svg" width="80" height="80" alt="Django">
<img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" width="80" height="80" alt="Python">

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-FF6B6B?style=for-the-badge&logoColor=white)](https://your-stock-portal.herokuapp.com)
[![API Docs](https://img.shields.io/badge/📖_API_Docs-4ECDC4?style=for-the-badge&logoColor=white)](#-api-endpoints)
[![Get Started](https://img.shields.io/badge/⭐_Get_Started-45B7D1?style=for-the-badge&logoColor=white)](#-installation)

</div>

---

## 🎯 Web-Based Stock Intelligence

<div align="center">

### LSTM Neural Networks Meet Django REST Framework

<table>
<tr>
<td align="center" width="140">
<img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width="50" height="50"><br>
<strong>Historical Data</strong><br>
<sub>CSV datasets</sub>
</td>
<td align="center" width="140">
<img src="https://cdn-icons-png.flaticon.com/512/8637/8637101.png" width="50" height="50"><br>
<strong>LSTM Training</strong><br>
<sub>Deep learning model</sub>
</td>
<td align="center" width="140">
<img src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" width="50" height="50"><br>
<strong>Django Backend</strong><br>
<sub>REST API server</sub>
</td>
<td align="center" width="140">
<img src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png" width="50" height="50"><br>
<strong>Predictions</strong><br>
<sub>Real-time forecasts</sub>
</td>
<td align="center" width="140">
<img src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png" width="50" height="50"><br>
<strong>Visualizations</strong><br>
<sub>Interactive charts</sub>
</td>
</tr>
</table>

</div>

---

## 🏗️ System Architecture

<div align="center">

```mermaid
graph TB
    subgraph "📊 Data Layer"
        A[TSLA.csv]
        B[Stock Datasets] 
        C[Historical Prices]
    end
    
    subgraph "🧠 ML Pipeline"
        D[Stock_prediction_LSTM.ipynb]
        E[Data Preprocessing]
        F[LSTM Neural Network]
        G[Stock_prediction_model.keras]
    end
    
    subgraph "🌐 Django Backend"
        H[manage.py]
        I[accounts/ - Authentication]
        J[api/ - Predictions]
        K[REST API Endpoints]
    end
    
    subgraph "📱 Client Interface"
        L[POST /predict]
        M[Prediction Response]
        N[Chart Visualizations]
    end
    
    A --> D
    B --> E
    C --> F
    D --> G
    G --> J
    I --> K
    J --> L
    K --> M
    M --> N
    
    style D fill:#ff6b6b,stroke:#fff,stroke-width:3px,color:#fff
    style G fill:#4ecdc4,stroke:#fff,stroke-width:3px,color:#fff
    style J fill:#45b7d1,stroke:#fff,stroke-width:3px,color:#fff
    style K fill:#96ceb4,stroke:#fff,stroke-width:2px,color:#fff
    style L fill:#ffeaa7,stroke:#333,stroke-width:2px,color:#333
    style M fill:#dda0dd,stroke:#fff,stroke-width:2px,color:#fff
```

</div>

---

## 🚀 Quick Setup

<div align="center">

### Launch Your Stock Portal

<table>
<tr>
<td align="center" width="200">
<img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" width="80" height="80"><br>
<strong>1. Clone Repository</strong><br>
<code>git clone [repo-url]</code>
</td>
<td align="center" width="200">
<img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" width="80" height="80"><br>
<strong>2. Install Dependencies</strong><br>
<code>pip install -r requirements.txt</code>
</td>
<td align="center" width="200">
<img src="https://static.djangoproject.com/img/logos/django-logo-positive.svg" width="80" height="80"><br>
<strong>3. Run Django Server</strong><br>
<code>python manage.py runserver</code>
</td>
<td align="center" width="200">
<img src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png" width="80" height="80"><br>
<strong>4. Access API</strong><br>
<code>localhost:8000/api/</code>
</td>
</tr>
</table>

</div>

---

## 📊 Portal Features

<div align="center">

### Complete Stock Prediction Ecosystem

<table>
<tr>
<td align="center" width="300">
<br>
<strong>LSTM Neural Network</strong><br>
<sub>Trained keras model for price forecasting</sub><br>
📁 Stock_prediction_model.keras
</td>
<td align="center" width="300">
<br>
<strong>REST API Backend</strong><br>
<sub>Django REST Framework endpoints</sub><br>
🔗 POST /predict • GET /charts
</td>
</tr>
<tr>
<td align="center" width="300">
<br>
<strong>Authentication System</strong><br>
<sub>User registration & login management</sub><br>
🔐 accounts/ app
</td>
<td align="center" width="300">
<br>
<strong>Interactive Visualizations</strong><br>
<sub>Real-time stock price charts</sub><br>
📊 Matplotlib integration
</td>
</tr>
</table>

### Learning Resources Hub

<table>
<tr>
<td align="center" width="200">
<br>
<strong>LearnJupyter.ipynb</strong><br>
<sub>Notebook tutorials</sub>
</td>
<td align="center" width="200">
<br>
<strong>LearnMatplot.ipynb</strong><br>
<sub>Visualization guide</sub>
</td>
<td align="center" width="200">
<br>
<strong>LearnNumpy.ipynb</strong><br>
<sub>Data processing</sub>
</td>
</tr>
</table>

</div>

---

## 🛠️ Tech Stack

<div align="center">

### Production-Ready Technologies

<table>
<tr>
<td align="center" width="120">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" width="60" height="60"><br>
<strong>Python</strong><br>
<sub>Core Language</sub>
</td>
<td align="center" width="120">
<img src="https://static.djangoproject.com/img/logos/django-logo-positive.svg" width="60" height="60"><br>
<strong>Django</strong><br>
<sub>Web Framework</sub>
</td>
<td align="center" width="120">
<img src="https://www.django-rest-framework.org/img/logo.png" width="60" height="60"><br>
<strong>DRF</strong><br>
<sub>REST API</sub>
</td>
<td align="center" width="120">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg" width="60" height="60"><br>
<strong>Keras</strong><br>
<sub>Deep Learning</sub>
</td>
<td align="center" width="120">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" width="60" height="60"><br>
<strong>Pandas</strong><br>
<sub>Data Analysis</sub>
</td>
</tr>
<tr>
<td align="center" width="120">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" width="60" height="60"><br>
<strong>NumPy</strong><br>
<sub>Numerical Computing</sub>
</td>
<td align="center" width="120">
<img src="https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png" width="60" height="60"><br>
<strong>Matplotlib</strong><br>
<sub>Plotting & Charts</sub>
</td>
<td align="center" width="120">
<img src="https://jupyter.org/assets/logos/rectanglelogo-greytext-orangebody-greymoons.svg" width="60" height="60"><br>
<strong>Jupyter</strong><br>
<sub>Notebooks</sub>
</td>
<td align="center" width="120">
<img src="https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" width="60" height="60"><br>
<strong>Scikit-learn</strong><br>
<sub>ML Preprocessing</sub>
</td>
<td align="center" width="120">
<img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" width="60" height="60"><br>
<strong>Git</strong><br>
<sub>Version Control</sub>
</td>
</tr>
</table>

</div>

---

## 📁 Project Structure Visualization

<div align="center">

```
🚀 Stock_Prediction_Portal_main/
│
└── 📂 Stock_Prediction_Portal-main/
    ├── 📋 .gitignore
    │
    ├── 📚 Resources/                        ← 🎓 Learning Hub
    │   ├── 📓 LearnJupyter.ipynb            ← 📖 Jupyter tutorials
    │   ├── 📊 LearnMatplot.ipynb            ← 📈 Plotting guide
    │   ├── 🔢 LearnNumpy.ipynb              ← 🧮 NumPy basics
    │   ├── 🧠 Stock_prediction_LSTM.ipynb   ← 🎯 Core ML Logic
    │   ├── 📈 TSLA.csv                      ← 🚗 Tesla dataset
    │   ├── 📞 call_activity.csv             ← 📊 Demo data
    │   └── 🚙 auto_sales_data.csv           ← 📊 Example data
    │
    └── 🌐 backend/                          ← 🏗️ Django Server
        ├── 🎯 manage.py                     ← 🚀 Django manager
        ├── 🤖 Stock_prediction_model.keras  ← 🧠 Trained LSTM
        │
        ├── 👤 accounts/                     ← 🔐 Authentication
        │   ├── 🏗️ models.py                 ← 👥 User models
        │   ├── 🎨 views.py                  ← 🔑 Auth views
        │   └── 📡 serializers.py            ← 🔄 Data marshalling
        │
        └── 🔮 api/                          ← 📊 Prediction API
            ├── 🏗️ models.py                 ← 📈 Prediction models  
            ├── 🎨 views.py                  ← 🤖 API endpoints
            ├── 🔧 utils.py                  ← 🛠️ Helper functions
            ├── 🔗 urls.py                   ← 🌐 URL routing
            └── 📡 serializers.py            ← 📊 JSON responses
```

</div>

---

## 🔗 API Endpoints

<div align="center">

### RESTful Stock Prediction API

<table>
<tr>
<td align="center" width="200">
<img src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" width="40" height="40"><br>
<code>POST /api/predict</code><br>
<sub>🔮 Generate predictions</sub>
</td>
<td align="center" width="200">
<img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width="40" height="40"><br>
<code>GET /api/charts</code><br>
<sub>📊 Fetch visualizations</sub>
</td>
<td align="center" width="200">
<img src="https://cdn-icons-png.flaticon.com/512/1828/1828490.png" width="40" height="40"><br>
<code>POST /accounts/login</code><br>
<sub>🔑 User authentication</sub>
</td>
<td align="center" width="200">
<img src="https://cdn-icons-png.flaticon.com/512/1828/1828391.png" width="40" height="40"><br>
<code>POST /accounts/register</code><br>
<sub>👤 User registration</sub>
</td>
</tr>
</table>

</div>

---

## 🎯 Commands & Usage

<div align="center">

<table>
<tr>
<td align="center" width="200">
<img src="https://static.djangoproject.com/img/logos/django-logo-positive.svg" width="40" height="40"><br>
<code>python manage.py runserver</code><br>
<sub>🚀 Start Django server</sub>
</td>
<td align="center" width="200">
<img src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png" width="40" height="40"><br>
<code>python manage.py migrate</code><br>
<sub>🗄️ Setup database</sub>
</td>
<td align="center" width="200">
<img src="https://jupyter.org/assets/logos/rectanglelogo-greytext-orangebody-greymoons.svg" width="40" height="40"><br>
<code>jupyter notebook</code><br>
<sub>📓 Open notebooks</sub>
</td>
<td align="center" width="200">
<img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" width="40" height="40"><br>
<code>python manage.py test</code><br>
<sub>🧪 Run tests</sub>
</td>
</tr>
</table>

</div>

---



## 🔗 Resources & References

<div align="center">

<table>
<tr>
<td align="center" width="150">
<img src="https://static.djangoproject.com/img/logos/django-logo-positive.svg" width="40" height="40"><br>
<a href="https://www.djangoproject.com/"><strong>Django Docs</strong></a><br>
<sub>Web framework guide</sub>
</td>
<td align="center" width="150">
<img src="https://www.django-rest-framework.org/img/logo.png" width="40" height="40"><br>
<a href="https://www.django-rest-framework.org/"><strong>DRF Guide</strong></a><br>
<sub>REST API framework</sub>
</td>
<td align="center" width="150">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg" width="40" height="40"><br>
<a href="https://keras.io/"><strong>Keras Docs</strong></a><br>
<sub>Deep learning library</sub>
</td>
<td align="center" width="150">
<img src="https://jupyter.org/assets/logos/rectanglelogo-greytext-orangebody-greymoons.svg" width="40" height="40"><br>
<a href="https://jupyter.org/"><strong>Jupyter</strong></a><br>
<sub>Interactive notebooks</sub>
</td>
</tr>
</table>

</div>

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

## 📞 Support

<div align="center">

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-red?style=for-the-badge&logo=github)](https://github.com/Ratan1103/Stock_Prediction_Portal/issues)
[![Email](https://img.shields.io/badge/Email-Contact-blue?style=for-the-badge&logo=gmail)](mailto:sanjayratan665@gmail.com)

</div>

If you have any questions, feel free to:
- 🐛 [Open an issue](https://github.com/Ratan1103/Stock_Prediction_Portal/issues)
- 📧 Send an email to `sanjayratan665@gmail.com`
- 💬 Start a discussion in the repository

---

</div>
