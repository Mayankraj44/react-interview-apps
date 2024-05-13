import React from 'react'
import Grid from './components/Grid'
import "./index.css";
import Grid2 from './components/Grid2';


/** 
 * Make n*n grids which are clickable and turns on or active when clicked and when all the lights
 * are active making them inactive in the reverse orders as light clicked first will be last to off
 * or inactive. 
 * Conditions: 
 *   After clicking a light once it cannot be turned off by clicking 
 * 
 * 
*/




const GridSequence = () => {
  return (
    <div>
      {/* <Grid size={3} disabledList={[[1,1]]} /> */}
      <Grid2 size={3} disabledList={[4]} />
      </div>
  )
}

export default GridSequence