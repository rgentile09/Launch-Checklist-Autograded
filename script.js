// Write your JavaScript code here!

const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
console.log("hey")
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        // 
    })

        let formSubmit = document.getElementById("formSubmit");
        // let launchStatus = document.getElementById("launchStatus")
        formSubmit.addEventListener("click", function(event) {
            // event.preventDefault();
        let document = document.getElementById("testForm");
        let list = document.getElementById("launchStatusCheck");
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
       
        console.log(pilot)
      formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass)
     
        });
    });

    // addEventListener for button
    // declare variables
    // call function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
