import React from "react";
import "./App.css";

// Define a component for each weather forecast item
const WeatherForecastsListItem = ({ day, img, imgAlt, conditions, time }) => (
  <div className="weather-item">
    <h2>{day}</h2>
    <img src={img} alt={imgAlt} />
    <p>Conditions: {conditions}<span/></p>
    <p>Time: {time}</p>
  </div>
);

const App = () => {
  const weatherForecasts = [
    {
      day: "Mon",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg",
      imgAlt: "sun icon",
      conditions: "sunny",
      time: "Morning",
    },
    {
      day: "Tue",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg",
      imgAlt: "moon icon",
      conditions: "clear",
      time: "Night",
    },
    {
      day: "Wed",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg",
      imgAlt: "clouds with lightning icon",
      conditions: "stormy",
      time: "All Day",
    },
    {
      day: "Thu",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg",
      imgAlt: "sun overcast by clouds icon",
      conditions: "overcast",
      time: "Evening",
    },
    {
      day: "Fri",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg",
      imgAlt: "moon overcast by clouds icon",
      conditions: "cloudy",
      time: "Night",
    },
  ];

  return (
    <>
    <div id = 'body'>
      <h1>Local Weather</h1>
      <section>
        {weatherForecasts.map((weather, index) => (
          <WeatherForecastsListItem
            key={index} // Add a unique key for each item in the list
            day={weather.day}
            img={weather.img}
            imgAlt={weather.imgAlt}
            conditions={weather.conditions}
            time={weather.time}
          />
        ))}
      </section>
      </div>
    </>
  );
};

export default App;

