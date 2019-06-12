function getMeetupApi(meetup_type) {
  return fetch(`https://www.eventbriteapi.com/v3/events/search/?location.address=nashville&token=${meetup_app_keys}&q=${meetup_type}`)
  .then( meetupData => meetupData.json())
}

function name(params) {
  
}



