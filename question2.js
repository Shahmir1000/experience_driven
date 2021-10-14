
const elevationMap = (topography) =>{
  let upperElevation = null;
  let lowerElevation = null;

  const maxHeight = Math.max(...topography)
  const mHIndex = array1.findIndex((num)=> num==max);

  for(let p=0; p<topography.length; p++){
    const currentElevation = topography[p]
    if(upperElevation == null){
        upperElevation = currentElevation;
        continue;
      }
    const nextElevationindex = null;
    const nextElevationValue = null;;
    //looking for the next elevation after the current Elevation
    for(let x=p+1; x<topography.length; x++){
      if(topography[p] >= upperElevation){
        nextElevationindex = x;
        nextElevationValue = topography;
        break;
      }
    }
    //if their are not any elevations their are no more traps of water to be found. Return the traps value and break the look.
    if(nextElevationValue == null){

    }
    if()
    if(upperEleavation < currentElevation ){
      lowerElevation = upperElevation; 
      upperElevation = currentElevation;
    }
  }

}

function findNextElevationIndex(currentIndex){
  for(let x=currentIndex; x<topography.length; x++){
    if(topography[currentIndex] >= upperElevation){
      nextElevationindex = x;
      nextElevationValue = topography;
      break;
    }
  }
}

function calculateWater(upper, lower){

}