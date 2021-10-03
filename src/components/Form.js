import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";

export default function Form() {
  const apiKey = "92c3455c231da84ffd5e9da4dcfc1d4c";
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";

  const [searchText, setSearchText] = useState("");
  const [weather, setWeather] = useState([]);

  const url = (city) => `${apiURL}${city}&appid=${apiKey}&units=metric`;

  const weatherData = async (e) => {
    e.preventDefault();
    if (searchText === "") {
      alert("Add city name!");
    } else {
      const data = await fetch(url(searchText), { origin: "cross" });
      const parsedData = await data.json();
      setWeather({
        data: parsedData,
      });
      setSearchText("");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    let value = e.target.value;

    setSearchText(value);
  };

  return (
    <div
      className="container-md mt-5 border border-2 border-primary vstack p-0"
      style={{
        height: "90vh",
        width: "90vw",
        borderRadius: '1rem',
      }}
      id="container"
    >

      <div className="border-bottom border-3 rounded-top border-success p-0 m-0">
        <form className="hstack my-5 justify-content-center pt-2 pb-3">
          <input
            type="text"
            // value={searchText}
            className="form-control rounded-pill w-50"
            onChange={(e) => handleChange(e)}
            id="search-box"
            autoComplete="off"
          />
          <button
            className="btn btn-primary ms-3 rounded-pill"
            onClick={(e) => weatherData(e)}
            type="submit"
          >
            <i className="bi bi-search me-2"></i>Search
          </button>
        </form>
      </div>

      <div>
        {weather.data !== undefined && weather.data.cod !== "404" ? (
          <WeatherDetails data={weather.data} />
        ) : null}
      </div>
    </div>
  );
}
