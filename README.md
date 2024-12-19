# Weather App Documentation

## Overview
The Weather App is a personal project showcasing full-stack development skills using Node.js and React.js. It integrates the OpenWeather API to fetch and display real-time weather data for any location globally. This project demonstrates back-end server setup, front-end design, and the implementation of asynchronous programming techniques.

## Features
- **Live Weather Data**: Provides real-time weather updates based on user-inputted locations.
- **Interactive UI**: A responsive and user-friendly interface built with React.js.
- **Efficient Back-End**: Node.js server handles API requests and processes data seamlessly.
- **Error Handling**: Displays appropriate messages for invalid inputs or API errors.

## Technologies Used
- **Node.js**: For back-end development.
- **React.js**: To create a dynamic front-end.
- **OpenWeather API**: For fetching live weather data.
- **Axios**: To handle HTTP requests.
- **JavaScript (ES6+)**: For asynchronous programming and data manipulation.

## Setup and Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Cheesy27/Weather-App.git
   cd weather-app
   ```

2. **Install dependencies**:
  ```bash
  npm install
  ```

3. **Create a .env file in the root directory and add your OpenWeather API key**:
  ```env
  REACT_APP_API_KEY=https://api.openweathermap.org/data/2.5/weather?q=
  ```

4. **Start the development server**:
```bash
npm start
```
## How It Works
1. **User Input**: Users enter a city name or location.
2. **API Call**: The app sends a request to the OpenWeather API via the Node.js back-end.
3. **Data Processing**: JSON data from the API is parsed and sent to the React front-end.
4. **Dynamic Rendering**: Weather data is displayed interactively on the UI. 

## Key Highlights
- **Asynchronous Programming**: Efficiently manages API requests and handles data with async/await.
- **Full-Stack Integration**: Combines back-end and front-end technologies seamlessly.
- **Responsive Design**: Ensures compatibility across devices and screen sizes.
