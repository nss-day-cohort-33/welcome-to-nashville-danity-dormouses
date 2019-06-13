let uniqueConcID = 0
let uniqueButtonID = 0

function getConcertApi(concert_search) {
  return fetch(
//     `https://app.ticketmaster.com/discovery/v2/events.json?city=nashville&keyword=${concert_search}&apikey=${concerts_keys}`
  ).then(concertData => concertData.json());
}
// fetch(`${apiURL}city=nashville&keyword=${concertsInput.value}&apikey=${concerts_keys}`)

let concertsInput = document.querySelector("#input-concerts");
document.querySelector("#button-concerts").addEventListener("click", () => {
//   let apiURL = "https://app.ticketmaster.com/discovery/v2/events.json?"
fetch (`https://app.ticketmaster.com/discovery/v2/events.json?city=nashville&keyword=${concertsInput.value}&apikey=${concerts_keys}`)
    .then(concertData => concertData.json())
    .then(concert => {
      document.querySelector("#results").innerHTML = "";
      for (let i = 0; i < concert._embedded.events.length; i++) {
	      uniqueButtonID++
	      uniqueConcID++
        AddConcertComponentToDom(createConcertSearchComponent(concert._embedded.events[i]))
      };
    });
});

let resultField = document.querySelector("#results")

resultField.addEventListener("click", () => {
	if (event.target.id.includes("butt-")) {
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
    <h2 id=conc-${uniqueConcID}>${concertObj.name}</h2>
    <button id=butt-${uniqueButtonID}>Save</button>
      `;
}

function putMyConcertIntoTheItinerary (concertElement) {
	document.getElementById("concert-itinerary").innerHTML = "Concert:" + concertElement;
}

// let searchInput = document.querySelector("#concertSearch")
// document.querySelector("#concertBtn").addEventListener("click", () => {
//    nameData(searchInput)
// })


// function nameData(name) {

//    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=Nashville&classificationId=KZFzniwnSyZfZ7v7nJ&apikey=${concertKey}&keyword=${name.value}`)

//        .then(response => response.json())
//        .then(concertData => {
//            let artistArray = concertData._embedded.events
//            document.querySelector("#searchResults").innerHTML = "";

//            for (let i = 0; i < 5; i++) {

//                let artistName = artistArray[i].name

//                let venuesAddress = artistArray[i]._embedded.venues[0].name

//                let putInSearch = document.querySelector("#searchResults")

//                putInSearch.innerHTML += putInDOM =
//                    `<p id="idSearchResults${i}">${artistName} - ${venuesAddress}</p>
//                    <button id="itenBtn--${i}"class="addConcert" type="button">save</button>
//                    `;
//                addToBtn()
//            }
//        })
// }
// function addToIten(event) {

//    let putInItinerary = document.querySelector("#itenirary")
//    let btnID = event.target.id
//    console.log(btnID)
//    let btnIdArray = btnID.split("--")
//    console.log(btnIdArray);
//    let btnIdNumber = btnIdArray[1]
//    console.log(btnIdNumber)
//    let addConcertInfo = document.querySelector('#searchResults' + btnIdNumber).value;
//    console.log(addConcertInfo)
//    putInItinerary.innerHTML = `<p>${addConcertInfo}</p>`

// }


// function addToBtn() {
//    let allAddBtns = document.querySelectorAll(".addConcert")
//    for (let i = 0; i < allAddBtns.length; i++) {
//        allAddBtns[i].addEventListener('click', addToIten)
//    }
// }