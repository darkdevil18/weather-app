import React, { useState } from "react";

export default function Form(props) {

  const apiKey = process.env.REACT_APP_API_KEY_FOR_WEATHER;
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";

  const [searchText, setSearchText] = useState("");

  const url = (city) => `${apiURL}${city}&appid=${apiKey}&units=metric`;

  const weatherData = async (e) => {
    e.preventDefault();
    if (searchText === "") {
      alert("Add city name!");
    } else {
      const data = await fetch(url(searchText));
      const parsedData = await data.json();
      props.getWeather(parsedData);
      setSearchText("");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    let value = e.target.value;

    setSearchText(value);
  };

  return (
    <form className="hstack my-5 justify-content-center pt-2 pb-3">
      <input
        type="text"
        value={searchText}
        className="form-control rounded-pill w-50"
        onChange={(e) => handleChange(e)}
        id="search-box"
        autoComplete="off"
        placeholder="Enter city name"
      />
      <button
        className="btn btn-primary ms-3 rounded-pill"
        onClick={(e) => weatherData(e)}
        type="submit"
      >
        <i className="bi bi-search me-2"></i>Search
      </button>
    </form>
  );
}
