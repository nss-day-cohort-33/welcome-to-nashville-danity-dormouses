let uniqueConcID = 0
let uniqueButtonConID = 0

let concertsInput = document.querySelector("#input-concerts");
document.querySelector("#button-concerts").addEventListener("click", () => {
  let apiURL = "https://app.ticketmaster.com/discovery/v2/events.json?"
  fetch(`${apiURL}city=nashville&keyword=${concertsInput.value}&apikey=${concerts_keys}`)
    .then(concertData => concertData.json())
    .then(concert => {
      document.querySelector("#results").innerHTML = "";
      for (let i = 0; i < concert._embedded.events.length; i++) {
	      uniqueButtonConID++
	      uniqueConcID++
        AddConcertComponentToDom(createConcertSearchComponent(concert._embedded.events[i]))
      };
    });
});

let resultFieldConcert = document.querySelector("#results")

resultFieldConcert.addEventListener("click", () => {
	if (event.target.id.includes("buttCon-")) {
    let buttonIdArray = event.target.id.split("-")
		let concertElement = document.getElementById(`conc-${buttonIdArray[1]}`).textContent
		putMyConcertIntoTheItinerary(concertElement)
	}
})

function AddConcertComponentToDom(concertName) {
  document.getElementById("results").innerHTML += concertName;
}

function createConcertSearchComponent(concertObj) {
  return `
    <h2 id="conc-${uniqueConcID}">${concertObj.name}</h2>
    <button id="buttCon-${uniqueButtonConID}">Save</button>
      `;
}

function putMyConcertIntoTheItinerary (concertElement) {
	document.getElementById("concert-itinerary").innerHTML = concertElement;
}
