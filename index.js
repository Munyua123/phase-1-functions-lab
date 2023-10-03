// Code your solution in this file!
function distanceFromHqInBlocks(Hq) {
    const hq = 42
 if (Hq > hq) {
     return  Hq - hq
 } else if (Hq < hq) {
    return hq - Hq
 } else {
    return 0
 }
}
const hq = 42
function distanceFromHqInFeet(Hq) {
    distanceFromHqInBlocks(Hq)
 if (Hq > hq) {
    return (Hq - hq) * 264 
 } else if (Hq < hq) {
    return (hq - Hq) * 264
 } else {
    return 0 * 264 
 }
}

function distanceTravelledInFeet(s1, s2) {
    if (s1 < s2){
        return (s2 - s1) * 264
    } else if(s1 > s2){
        return (s1 - s2) * 264
    } else { 
        return 0
    }
}

function calculatesFarePrice(start, destination){
    const totalFeet = ((start - destination) * 264)
    const totalDistance = ((destination-start)*264)
 if (totalDistance > 2000 && totalDistance < 2500) {
        return 25
    } 
    else if (totalFeet > 400 && totalFeet < 2000) {
        const extraFeet = totalFeet - 400;
        const fare = extraFeet * 0.02;
        return fare 
 } 
 else if (totalFeet >= 2500) {
     return "cannot travel that far"
    } 
    else  {
        return 0
}
}

