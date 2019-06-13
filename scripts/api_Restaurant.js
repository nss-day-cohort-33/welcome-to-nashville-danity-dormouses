// function getRestaurantByCuisineApi (searchByCuisine) {
//     return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${searchByCuisine}&sort=rating&apikey=${restaurant_api_key}`)
//     .then( foodFromApi => foodFromApi.json())
// }


let inputCuisineData = document.getElementById("input-restaurants")
document.getElementById("button-restaurants").addEventListener("click", () => {
    let apiUrl = "https://developers.zomato.com/api/v2.1/search"
    fetch(`${apiUrl}?entity_id=1138&entity_type=city&q=${inputCuisineData.value}&sort=rating&apikey=${restaurant_api_key}`)
    .then(foodData => foodData.json())
    .then(food => {
        document.getElementById("results").innerHTML = "";
      for (let i = 0; i <food.restaurants.length ; i++) {
        AddFoodComponentToDom(createFoodSearchComponent(food.restaurants[i]))
        
        }
    })
})
   

function AddFoodComponentToDom(nameOfRestaurant) {
    document.getElementById("results").innerHTML += nameOfRestaurant;
}


function createFoodSearchComponent(foodObj) {
    return `
        <h2>${foodObj.restaurant.name}</h2>
            <button>Save</button>
    `;
} 

//         // first we need to fetch the getCuisineArray
//         // then we need to loop through the array
//         // then we need to target the cuisine's ID value
//         // then we need to take the id of that cuisine value and put it in the 
//         // getRestaurantByCuisineApi parameter(Cuisine ID) and run that and loop through that Array
//         // then we need to take those results (restaurant name) and target the "results-id" on the dom
//         // and dynamically put the results of all the restaurants with that cuisine in the do