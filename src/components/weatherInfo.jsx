// WeatherInfo.js
import React from "react";

const WeatherInfo = ({ title, value, icon, symbol }) => {
  return (
         <div className=" bg-yellow-300 h-24 w-24 rounded-md">
        <img className="h-10 m-auto" src={icon} />
        <div className="text-xs my-1 font-bold">{title}</div>
        <div className="text-xl font-bold">{value}{symbol}</div>
      </div>
  );
};

export default WeatherInfo;
