
import React from 'react';
import '../App.css'; 

const WeatherCard = ({ weatherData }) => {
  const { list, city } = weatherData;

  const formatDateTime = (dt_txt) => {
    return dt_txt;
  };

  return (
    <div>
      <h1>5-Day Weather Forecast for {city.name}, {city.country}</h1>
      <div>
        {list.map((data, index) => (
          <div key={index} className="weather-card">
            <h2>{formatDateTime(data.dt_txt)}</h2>
            <p>Temperature: {data.main.temp} K</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Weather: {data.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt={data.weather[0].description}
            />
            {/* Add other weather details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
