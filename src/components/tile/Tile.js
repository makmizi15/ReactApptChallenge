import React from "react";

export const Tile = ( {tile} ) => {
  return (
    <div className="tile-container">
    {Object.values(tile).map((value, index) => {
      const findClass = index === 0 ? 'tile-title' : 'tile';
      return (<p key={index} className={findClass}>{value}</p>)
    })}
    </div>
  );
};
