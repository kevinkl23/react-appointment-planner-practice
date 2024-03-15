import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ( {lists} ) => {
  if(!lists) {
    return (
      <div></div>
    )
  }
  return (
    <div>
      {lists.map(list => {
        return <Tile name={list.name} description={list.description}/>
      })}
    </div>
  );
};
