import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const seasonText =
    season === "winter" ? "Burr, I'ts Chilly" : "Let's hit the beach";
  const iconName = season === "winter" ? "snowflake" : "sun";

  return (
    <div>
      <i className={`icon ${iconName}`}></i>
      <h1>{seasonText}</h1>
      <i className={`icon ${iconName}`}></i>
    </div>
  );
};

export default SeasonDisplay;
