import React, { useState, useEffect } from "react";

import UserContext from "./Usercontext";

const UserContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("delhi");
  const [cityName, setCityName] = useState("");

  // Fetching API Data 
  useEffect(() => {
    const fetchWeatherData = async () => {
      const url =
        `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
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

export default UserContextProvider;
