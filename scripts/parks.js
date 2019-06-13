
let parkURL = `https://data.nashville.gov/resource/74d7-b74t.json`;

document.querySelector("#button-parks").addEventListener("click", () => {
  let parksSearchInput = document.querySelector("#selection-parks").value;
  let parkParamaterToURL = "";

  if (parksSearchInput !== "none") {
    parkParamaterToURL = "?" + parksSearchInput + "=Yes";
  }

  return fetch(parkURL + parkParamaterToURL, {
    headers: {
      Accept: "application/json",
      "X-App-Token": `${parks_key}`
      }
    })
    .then(parkData => parkData.json())
    .then(parks => {
      document.querySelector("#results").innerHTML = "";

      for(let i=0; i < parks.length; i++) {
        AddParkComponentToDom(createParkSearchComponent(parks[i], i));
      }

      let saveButton = document.querySelectorAll(".save-btn");

      saveButton.forEach(button =>{
        button.addEventListener("click", function (i) {
          let buttonId = event.target.id
          let idArray = buttonId.split("-")
          let idNumber = idArray[1]
          let parkId = "parkname-" + idNumber
          let parkName = document.getElementById(parkId).textContent

          console.log(parkName);

          AddSelectedComponentToDom(createItineraryComponent(parkName));
        });
      });

    });
});


function AddSelectedComponentToDom(selectedComponent) {
  document.getElementById("itinerary").innerHTML += selectedComponent;
}

function AddParkComponentToDom(parkComponent) {
  document.getElementById("results").innerHTML += parkComponent;
}

function createParkSearchComponent(parkObj, index) {
  return `
    <h3 id="parkname-${index}">${parkObj.park_name}</h3>
    <button class="save-btn" id="savebtn-${index}">Save</button>
  `;

// use split after dash to target index id will produce array, event.target.id

}

function createItineraryComponent(park) {
  return `
    <h3 id="park-itinerary"><strong>Park: </strong>${park}</h3>
  `;
}