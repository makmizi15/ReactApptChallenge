import React from "react";
import {Tile} from '../tile/Tile.js'

export const TileList = ( {tiles} ) => {
  return (
    <div>
      {tiles.map((tiles, index) => (
        <Tile key={index} tile={tiles}/>
      ))}
    </div>
  );
};
