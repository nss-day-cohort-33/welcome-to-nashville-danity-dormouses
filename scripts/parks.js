
// function getParkAPI () {
//   return fetch (`https://data.nashville.gov/resource/74d7-b74t.json`)
//   .then(parkData => parkData.json());

// }

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
        AddParkComponentToDom(createParkSearchComponent(parks[i]));

      }

    });
});


function AddParkComponentToDom(parkComponent) {
  document.getElementById("results").innerHTML += parkComponent;
}

function createParkSearchComponent(parkObj) {
  return `
    <h3>${parkObj.park_name}</h3>
    <button>Save</button>
  `;
}