function getConcertApi(concert_search) {
  return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=nashville&keyword=${concert_search}&apikey=${concerts_keys}`)
  .then( concertData => concertData.json())
 }
 
 let searchInput = document.querySelector("#input-concerts")
 document.querySelector("#button-concerts").addEventListener("click", () => {
  let apiURL = "https://app.ticketmaster.com/discovery/v2/events.json?"
    fetch(`${apiURL}city=nashville&keyword=${searchInput.value}&apikey=${concerts_keys}`)
    .then( concertData => concertData.json())
    .then( concert => {
      document.querySelector("#results").innerHTML = ""
      for (let i = 0; i < concert._embedded.events.length; i++) {
      AddConcertComponentToDom(createConcertSearchComponent(concert._embedded.events[i]))
       }
      })
  })
 
 function AddConcertComponentToDom(concertName) {
  document.getElementById("results").innerHTML += concertName;
 }
 
 function createConcertSearchComponent(concertObj) {
    return `
    <h2>${concertObj.name}</h2>
      <button>Save</button>
      `;
 }