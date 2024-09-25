// Code your solution in this file!


// function  that takes the location of a Passanger
function distanceFromHqInBlocks (pickUpDst) {
   const headQuarters = 42;
   //if statement
   if (pickUpDst >= headQuarters) {
    return pickUpDst - headQuarters;
   } 
   else {
    return headQuarters - pickUpDst;
   }
}

// function that changes the distance in blocks to feet
function distanceFromHqInFeet (blocks) {
    const block = distanceFromHqInBlocks(blocks);
    const blockInFeet = 264;
    return blockInFeet * block;

}

// function calculating number of feet that is traveled by the passengers
function distanceTravelledInFeet (start, destination) {
    const blockInFeet = 264;
    let distanceTravelled;
    if (destination > start) {
        distanceTravelled = destination - start;
    }else{
        distanceTravelled = start - destination;
    }
  return distanceTravelled * blockInFeet;
}


//Function to return the fare for the customer
function calculatesFarePrice (start, destination) {
    const blockInFeet = 264;
    const distance = distanceTravelledInFeet(start, destination);
    let price;
    if (distance <= 400) {
         price = 0;
    }else if (distance > 400 && distance <= 2000) {
         price = (distance - 400) * 0.02;
    }else if (distance > 2000 && distance < 2500) {
         price = 25;
    }else {
        return 'cannot travel that far';
    }
    return price;
}
const startBlock = 38;
const stopBlock = 42;
console.log(calculatesFarePrice(startBlock, stopBlock));
























































