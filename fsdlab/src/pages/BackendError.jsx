import { useState } from "react";

function Weather() {
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch("https://api.weatherapi.com/data");

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      setError("Unable to load weather data. Please try again later.");
    }
  };

  return (
    <div>
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && <p>Temperature: {weather.temp}</p>}
    </div>
  );
}

export default Weather;