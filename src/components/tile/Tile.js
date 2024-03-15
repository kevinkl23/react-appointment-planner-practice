import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {description ? (
        Object.keys(description).map((key, index) => (
          <p key={index} className="tile">
            {`${key}: ${description[key]}`}
          </p>
        ))
      ) : (
        <p className="tile">No description available</p>
      )}
    </div>
  );
};
