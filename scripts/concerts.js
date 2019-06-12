function getAPIFood(concert_search) {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=nashville&keyword=${concert_search}&apikey=${concerts_keys}`)
    .then( concertFromAPI => concertFromAPI.json())
  }