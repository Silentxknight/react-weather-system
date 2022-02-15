import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Sheeish!, hot as heck man!",
    iconName: "sun",
  },
  winter: {
    text: "Woohs!!, it's damn cold here!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; //* as the get season and seasonConfig key is same getting the value

  return (
    <div className={`season-display ${season}`}>
      {/* <div>lat:{props.lat} </div>
      Season Display: {season} */}
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1> {text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
