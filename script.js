// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

// const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
    console.log("hey")
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        // 
        let randomPlan = {}
       randomPlan =  pickPlanet(listedPlanets);
       console.log(randomPlan);
        addDestinationInfo(document, randomPlan.name, randomPlan.diameter, randomPlan.star, randomPlan.distance, randomPlan.moons, randomPlan.image);
    })

    let launchForm = document.getElementById("launchForm");
    // let launchStatus = document.getElementById("launchStatus")
    launchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let list = document.getElementById("faultyItems").value;
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;

        // console.log(pilot.value)
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass)

    });
});

// addEventListener for button
// declare variables
// call function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
