// Write your helper functions here!
// list is id="faultyItems" to make visible when ready to launch
require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    // /
    // window.addEventListener()
    let missionTarget = document.getElementById("missionTarget");
    console.log(imageUrl);
    return missionTarget.innerHTML = `   <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`

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

    let results = [];
    results.push(validateInput(pilot));
    results.push(validateInput(copilot));
    results.push(validateInput(fuelLevel));
    results.push(validateInput(cargoMass));
    let faultyItems = document.getElementById("faultyItems");
    let h2 = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoMass === "") {
        alert("All fields are required");
        formSubmission.preventDefault();
    } if (results[0] === "Is a Number" || results[1] === "Is a Number" || results[2] === "Not a Number" || results[3] === "Not a Number") {
        alert("Valid input is required");
        formSubmission.preventDefault();
    }
    if (fuelLevel < 10000 && cargoMass > 10000) {
        return faultyItems.style.visibility = "visible",
            h2.innerHTML = "Shuttle Not Ready for Launch",
            h2.style.color = "red",
            fuelStatus.innerHTML = "Fuel level too low for launch",
            cargoStatus.innerHTML = "Cargo mass too heavy for launch",
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`,
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    }
    else if (fuelLevel < 10000) {
        return faultyItems.style.visibility = "visible",
            h2.style.color = 'red',
            h2.innerHTML = "Shuttle Not Ready for Launch",
            fuelStatus.innerHTML = "Fuel level too low for launch",
            cargoStatus.innerHTML = "Cargo mass low enough for launch",
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`,
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }
    else if (cargoMass > 10000) {
        return faultyItems.style.visibility = "visible",
            h2.innerHTML = "Shuttle Not Ready for Launch",
            h2.style.color = "red",
            cargoStatus.innerHTML = "Cargo mass too heavy for launch",
            fuelStatus.innerHTML = "Fuel level high enough for launch",
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`,
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }
    else {
        return pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`,
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`,
            fuelStatus.innerHTML = "Fuel level high enough for launch",
            cargoStatus.innerHTML = "Cargo mass low enough for launch",
            faultyItems.style.visibility = "visible",
            h2.innerHTML = "Shuttle is Ready for Launch",
            h2.style.color = "green";
    }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = {}
    let randomIndex = Math.floor(Math.random() * planets.length);
    planet = planets[randomIndex];
    return planet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;