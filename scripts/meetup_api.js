// function getMeetupApi(meetup_type) {
//   return fetch(`https://www.eventbriteapi.com/v3/events/search/?location.address=nashville&token=${meetup_app_keys}&q=${meetup_type}`)
//   .then( meetupData => meetupData.json())
// }

let searchInput = document.querySelector("#input-meetups");
document.querySelector("#button-meetups").addEventListener("click", () => {
  let meetup_type = searchInput.value;
  console.log(meetup_type);
  fetch(
    `https://www.eventbriteapi.com/v3/events/search/?location.address=nashville&token=${meetup_app_keys}&q=${meetup_type}`
  )
    .then(meetupData => meetupData.json())
    .then(meetup => {
      let meetupEvents = meetup.events;
      document.querySelector("#results").innerHTML = "";
      for (let i = 0; i < meetupEvents.length; i++)
        AddMeetupToDom(createMeetupComponent(meetupEvents[i]));
    });
});

function AddMeetupToDom(meetupName) {
  document.getElementById("results").innerHTML += meetupName;
}

function createMeetupComponent(meetupObj) {
  console.log(meetupObj);
  return `<h2>${meetupObj.name.text}</h2>
  <button>Save</button>`
}
