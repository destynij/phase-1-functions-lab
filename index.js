function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(42 - streetNumber);
}

function distanceFromHqInFeet(streetNumber) {
    return distanceFromHqInBlocks(streetNumber) * 264
}

function distanceTravelledInFeet(streetNumber, hike) {
    let far 
    if (streetNumber < hike) {
        far = (hike - streetNumber)*264
    }
    else {
        far = (streetNumber - hike)*264
    }
    return far
}

function calculatesFarePrice(streetNumber, stop) {
    let drive
    const miles = distanceTravelledInFeet(streetNumber, stop)
    if (miles < 400) {
        drive = 0
    } 
    else if ( miles > 400 && miles <= 2000) {
        drive = (miles - 400) * 0.02
    }
    else if (miles > 2000 && miles < 2500) {
        drive = 25
    }

    else if (distanceTravelledInFeet(streetNumber, stop) > 2500) {
      return 'cannot travel that far'
    }

    return drive
}