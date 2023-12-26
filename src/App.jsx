import WeatherDisplay from "./components/Weather";
import WeatherInput from "./components/WeatherInput";
import ContextProvider from "./context/UserContextProvider";
export default function App() {
  return (
    <ContextProvider>
      <WeatherInput/>
      <WeatherDisplay/>
     </ContextProvider> 
  );
}
  