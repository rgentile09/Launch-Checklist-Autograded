// Write your helper functions here!
// list is id="faultyItems" to make visible when ready to launch
require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } if (isNaN(testInput)) {
        return "Not a Number";
    } 
        return "Is a Number"
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let results = validateInput(document, list, pilot, copilot, fuelLevel, cargoMass);
    let faultyItems = document.getElementById("faultyItems")
    let launchStatus = document.getElementById("launchStatus")
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")
    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
   
    // launchStatus.style.color = "black";
    console.log(results)
    if (results.pilot === "Empty" || results.copilot === "Empty" || results.fuelLevel === "Empty" || results.cargoMass === "Empty") {
        alert("All fields are required");
        // event.preventDefault();
    } if (results.pilot === "Is a Number" || results.copilot === "Is a Number" || results.fuelLevel === "Not a Number" || results.cargoMass === "Not a Number") {
        alert("Valid input is required");
       
  
        // event.preventDefault();
    } if (fuelLevel < 10000) {
      faultyItems.style.visibility = "visible";
      launchStatus.style.color = 'red';
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      fuelStatus.innerHTML = "Fuel level too low for launch"
        // event.preventDefault();
    } if (cargoMass > 10000) {
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
    } else {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`,
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`,
    fuelStatus.innerHTML = "Fuel level high enough for launch",
    cargoStatus.innerHTML = "Cargo mass low enough for launch",
    faultyItems.style.visibility = "visible",
    launchStatus.innerHTML = "Shuttle is Ready for Launch",
    launchStatus.style.color = "green";
    
    
    }



}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = {}
    // random pick planet
    return planet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;