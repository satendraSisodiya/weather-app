# Weather App

## Description
This Weather App is a simple application that allows users to check weather information for different cities. It fetches real-time weather data from the Weather API and displays it in an easy-to-understand format.

## Features
- **City Weather Display**: Get weather details for a specific city.
- **Temperature Information**: Display temperature, feels-like temperature, min and max temperatures, humidity, wind speed, etc.
- **Sunrise and Sunset Information**: Provides sunrise and sunset times for the selected city.
- **Responsive Design**: The app is responsive and works well on various devices.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool that leverages modern ES modules for React projects.
- **Tailwind CSS**: Utility-first CSS framework used for styling the application.
- **RapidAPI for Weather Data**: Fetches real-time weather data.

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/your-username/weather-app.git
```

2. Install dependencies:

```bash
cd weather-app
npm install
```

3. Set up RapidAPI Key:

- Get your API key from RapidAPI.
- Create a .env file in the root directory.
- Add your API key:

```bash
VITE_API_KEY=your_rapidapi_key
```

4. Start the application:
```bash
npm run dev
```

5.Open your browser and go to http://localhost:5173/ to view the app.

## Usage
- Enter the name of the city in the input field and click "Enter" to fetch weather information for that city.

## Contributing
- Contributions are welcome! Fork the repository and make your changes, then open a pull request.