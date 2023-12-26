import { useContext } from "react";
import UserContext from "../context/Usercontext";
import WeatherInfo from "./weatherInfo";
import celsiusIcon from "../assets/celsius.png";
import weatherNewsIcon from "../assets/weather-news.png";
import sunnyIcon from "../assets/sun-1.gif";
import snowflakeIcon from "../assets/snowflake.gif";
import windDirectionIcon from "../assets/windDirc.png";
import windIcon from "../assets/wind.png";
import minTemperatureIcon from "../assets/cold.png";
import maxTemperatureIcon from "../assets/hot.png";
import sunriseIcon from "../assets/sunRise.png";
import sunsetIcon from "../assets/sunSet.png";
import cloudPercentageIcon from "../assets/cloudPct.png";
import humidityIcon from "../assets/drop.png";







 function WeatherHeader({ city, temperature }){
  return(
    <>
        <div className="h-auto sm:my-3 sm:w-96 sm:h-48 sm:mx-auto bg-gradient-to-r from-green-300 to-blue-500  ">

    <div className="bg-black text-yellow-50 sm:text-left sm:p-2  sm:font-semibold sm:text-lg">
            {city}
          </div>
          <div className="flex h-auto sm:w-96 sm:h-48">
            <div className="text-4xl font-bold m-5 sm:w-64 sm:h-30 sm:mx-7 sm:my-3 sm:text-left ">
              {temperature}
              <br />
              <img className=" h-16 w-16 my-3" src={celsiusIcon} />
            </div>
            <img
              className="m-auto h-28 w-28 sm:my-5 sm:mx-5 "
              src={weatherNewsIcon}
            />
          </div>
          </div>
    </>
  )
}

function WeatherCondition({feelsLike, isHotWeather}){
return(
  <div className="grid grid-cols-2 ">
            <div className="text-white sm:m-auto sm:min-w-30 sm:grid sm:grid-rows-2 ">
              <div className=" my-5 text-5xl font-bold sm:my-0 sm:flex sm:items-start sm:mx-2 ">
                {feelsLike}°
              </div>
              <div className="text-lg font-bold m-2 sm:text-base">
                Feels Like
              </div>
            </div>
            <div className="flex w-24 mx-10 justify-end sm:w-28 sm:mx-14 ">
              {isHotWeather ? (
                <img className=" sm:h-15" src={sunnyIcon} />
              ) : (
                <img className=" sm:h-15" src={snowflakeIcon} />
              )}
            </div>
          </div>
)
}



function SunriseInfo({formattedSunriseDate}){
  return(
    <div className="h-auto w-auto m-2 sm:w-48 bg-gradient-to-b from-yellow-300 to-orange-500">
    <div className="text-lg font-semibold my-1">Sunrise</div>
    <div className="text-2xl font-bold">{formattedSunriseDate}</div>
    <div>
      <img className="h-14 w-20 m-auto" src={sunriseIcon} />
    </div>
  </div>
  )
}

function SunsetInfo({formattedSunsetDate}){
  return(
    <div className="h-auto w-auto m-2 sm:w-48 bg-gradient-to-b from-blue-950 from-40% via-blue-900 to-blue-800">
            <div className="text-lg font-semibold my-1">Sunset</div>
            <div className="text-2xl font-bold">{formattedSunsetDate}</div>
            <div>
              <img className="h-14 w-20 m-auto" src={sunsetIcon} />
            </div>
          </div>
  )
}




export default function WeatherDisplay() {
  const { weatherData, city } = useContext(UserContext);

  const sunrise = weatherData.sunrise;
  const sunRiseDate = new Date(sunrise * 1000);
  const formattedSunriseDate = sunRiseDate.toLocaleString();

  const sunset = weatherData.sunset;
  const sunSetDate = new Date(sunset * 1000);
  const formattedSunsetDate = sunSetDate.toLocaleString();

  const isHotWeather = weatherData.feels_like >= 20;

  return (
    <>
      <div className="text-center sm:w-2/4 m-auto bg-gradient-to-bl from-lime-200 via-emerald-200 to-cyan-200">
          <WeatherHeader temperature={weatherData.temp} city={city}/>
        <div className=" w-auto h-auto sm:m-auto bg-gradient-to-t from-blue-700 to-blue-950  sm:w-96 sm:py-4 sm:rounded-lg">
          <WeatherCondition feelsLike={weatherData.feels_like} isHotWeather={isHotWeather}/>
          <div className=" grid grid-rows-3 grid-flow-col gap-9 m-auto justify-center  sm:grid-rows-2  sm:gap-5 sm:my-2 ">
            <WeatherInfo title={"wind degree"} value={weatherData.wind_degrees} icon={windDirectionIcon}   symbol={"°"}/>
            <WeatherInfo title={"wind speed"}  value={weatherData.wind_speed}   icon={windIcon}            symbol={"mi/h"}/>
            <WeatherInfo title={"humidity"}    value={weatherData.humidity}     icon={humidityIcon}        symbol={"%"}/>
            <WeatherInfo title={"min temp"}    value={weatherData.min_temp}     icon={minTemperatureIcon}  symbol={"°"}/>
            <WeatherInfo title={"max temp"}    value={weatherData.max_temp}     icon={maxTemperatureIcon}  symbol={"°"}/>
            <WeatherInfo title={"clouds"}      value={weatherData.cloud_pct}    icon={cloudPercentageIcon} symbol={"%"}/>
        </div>
        </div>
        <div className="sm:flex sm:w-96 sm:m-auto ">
         <SunriseInfo formattedSunriseDate={formattedSunriseDate}/>
         <SunsetInfo formattedSunsetDate={formattedSunsetDate}/>
        </div>
      </div>
    </>
  );
}