// function getMeetupApi(meetup_type) {
//   return fetch(`https://www.eventbriteapi.com/v3/events/search/?location.address=nashville&token=${meetup_app_keys}&q=${meetup_type}`)
//   .then( meetupData => meetupData.json())
// }
let uniqueButtonId = 0
let uniqueMeetupId = 0

let searchInput = document.querySelector("#input-meetups");
document.querySelector("#button-meetups").addEventListener("click", () => {
  let meetup_type = searchInput.value;
  fetch(
    `https://www.eventbriteapi.com/v3/events/search/?location.address=nashville&token=${meetup_app_keys}&q=${meetup_type}`
  )
    .then(meetupData => meetupData.json())
    .then(meetup => {
      let meetupEvents = meetup.events;
      document.querySelector("#results").innerHTML = "";
      for (let i = 0; i < meetupEvents.length; i++) {
        uniqueMeetupId++
        uniqueButtonId++
        AddMeetupToDom(createMeetupComponent(meetupEvents[i]));
      }
    });
});


let resultFieldMeet = document.getElementById("results")

resultFieldMeet.addEventListener("click", () => {
    if (event.target.id.includes("buttMeet-")) {
        let buttonIdArray = event.target.id.split ("-")
        let meetupElement = document.getElementById(`meet-${buttonIdArray[1]}`).textContent
        putMyMeetupIntoTheItinerary(meetupElement)
    }
  })

function AddMeetupToDom(meetupName) {
  document.getElementById("results").innerHTML += meetupName;
}

function createMeetupComponent(meetupObj) {
  return `<h2 id = "meet-${uniqueMeetupId}">${meetupObj.name.text}</h2>
  <button id = "buttMeet-${uniqueButtonId}">Save</button>`;
}


function putMyMeetupIntoTheItinerary(meetupElement) {
  document.getElementById("meetup-itinerary").innerHTML = meetupElement;
}