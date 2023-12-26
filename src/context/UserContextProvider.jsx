import React, { useState, useEffect } from "react";

import UserContext from "./Usercontext";

const UserContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("delhi");
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const url =
        `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "2582018af1msh3ea5727f74e3ee1p146c53jsn498d8ef0c848",
          "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },  
      };
      try{
        const response = await fetch(url,options)
        if(response.ok){
          const data = await response.json()
            setWeatherData(data)
          }else{
            console.error("Failed to fetch data")
        }
      }catch(error){
        console.error("Occur error to fetching weather data",error)
      }
    };
    fetchWeatherData()
  }, [city]);
  
  
  return (
    <UserContext.Provider value={{weatherData,city,setCity,cityName, setCityName}}>
      {children}
    </UserContext.Provider>
  );
};

// export const useWeather = () => {
//     const weatherData = useContext(UserContext);
//     if (!weatherData) {
//       throw new Error('useWeather must be used within a WeatherProvider');
//     }
//     return weatherData;
//   };

export default UserContextProvider;
