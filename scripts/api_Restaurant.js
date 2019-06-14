// function getRestaurantByCuisineApi (searchByCuisine) {
//     return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${searchByCuisine}&sort=rating&apikey=${restaurant_api_key}`)
//     .then( foodFromApi => foodFromApi.json())
// }

let uniqueRestId = 0
let uniqueRestButtonId = 0

let inputCuisineData = document.getElementById("input-restaurants")
document.getElementById("button-restaurants").addEventListener("click", () => {
    let apiUrl = "https://developers.zomato.com/api/v2.1/search"
    fetch(`${apiUrl}?entity_id=1138&entity_type=city&q=${inputCuisineData.value}&sort=rating&apikey=${restaurant_api_key}`)
    .then(foodData => foodData.json())
    .then(food => {
        document.getElementById("results").innerHTML = "";
      for (let i = 0; i <food.restaurants.length ; i++) {
          uniqueRestButtonId++
          uniqueRestId++
        AddFoodComponentToDom(createFoodSearchComponent(food.restaurants[i]))

        }
    })
})


let resultFieldRest = document.getElementById("results")

resultFieldRest.addEventListener("click", () => {
    if (event.target.id.includes("butt-")) {
            // console.log("this is the event ID before split", event.target.id)
        let buttonIdArray = event.target.id.split("-")
            // console.log("this is the event ID after the split", buttonIdArray)
        let restaurantElement = document.getElementById(`rest-${buttonIdArray[1]}`).textContent
        putMyRestaurantIntoTheItinerary(restaurantElement)
    }
})


function AddFoodComponentToDom(nameOfRestaurant) {
    document.getElementById("results").innerHTML += nameOfRestaurant;
}

function createFoodSearchComponent(foodObj) {
    return `
        <h2 id = rest-${uniqueRestId}>${foodObj.restaurant.name}</h2>
            <button id = butt-${uniqueRestButtonId}>Save</button>
    `;
}

function putMyRestaurantIntoTheItinerary (restaurantElement) {
    document.getElementById("restaurant-itinerary").innerHTML = restaurantElement;
    }







    