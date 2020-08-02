import React from "react";

const seasonConfig = {
  summer: {
    seasonText: "Let's hit the beach",
    iconName: "sun",
  },
  winter: {
    seasonText: "Burr, I'ts Chilly",
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
  const { seasonText, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`icon ${iconName}`}></i>
      <h1>{seasonText}</h1>
      <i className={`icon ${iconName}`}></i>
    </div>
  );
};

export default SeasonDisplay;
