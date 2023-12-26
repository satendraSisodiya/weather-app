import { useContext } from "react";
import UserContext from "../context/Usercontext";
export default function WeatherInput() {
  const  {setCity,cityName, setCityName} = useContext(UserContext);

  // Function to handle city submission
  const enterCity = (event) =>{
    event.preventDefault()
    setCity(cityName)
    setCityName("")
  }

  // Function to handle input changes for the city name
  const inputChange = (event) =>{
    setCityName( event.target.value);// Updates cityName using the input value
  }
  return (
    <>
    {/* Form for entering the city */}
      <div className="text-center m-auto ">
        <form className="text-center my-5 ">
        {/* Input field for entering the city name */}
          <input
            type="text"
            value={cityName}
            onChange={(e) => {
              inputChange(e);
            }}
            name="contryName"
            placeholder="Contry Name"
            className="sm:w-96 border-2 rounded"
          />
          {/* Button to submit the entered city */}
          <button
            type="submit"
            onClick={(e) => enterCity(e)}
            className="bg-green-600 mx-1 rounded w-16"
          >
            Enter
          </button>
        </form>
      </div>
    </>
  );
}
