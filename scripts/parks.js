

let parksSearchInput = document.querySelector("#input-parks")

document.querySelector("#button-parks").addEventListener("click", () => {
  return fetch(`https://data.nashville.gov/resource/74d7-b74t.json`)
  .then( parkData => parkData.json())
  .then( parks => {
    document.querySelector("#results").innerHTML = "";
    AddParkComponentToDom(createParkSearchComponent(parks), "results");
  });
});

function AddParkComponentToDom(parkComponent, element) {
  document.querySelector(`#${element}`).innerHTML += parkComponent;
}

function createParkSearchComponent(parkObj) {
  return `
    <h3>${parkObj[0].park_name}</h3>
    <button>Save to Itinerary</button>
  `;
}