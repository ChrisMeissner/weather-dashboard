var myApi = "1ba7fe7548e5920eb3df1299e7ccc9f0"

function getSearch() {
    event.preventDefault();
    var searchVal = document.querySelector("#search").value
    searchWeather(searchVal);
    saveCity(searchVal);
} 

function saveCity(searchVal) {
    var li = document.createElement("li")
    li.classList.add("list-group-item")
    li.textContent = searchVal
    li.onclick = function(){
        saveCity(searchVal)
    }
    var history = document.querySelector("#city-history")
    history.appendChild(li)
}

function searchWeather(searchVal) {
    fetch (`http://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=${myApi}&units=imperial`)
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data);
            var today = document.querySelector("#today-weather")
            if(today){
                today.innerHTML = "";
            }

            var title = document.createElement("h3");
            title.classList.add("card-title");
            title.textContent = searchVal;  

            var temp = document.createElement("p")
            temp.classList.add("card-text")
            temp.textContent = "Temperature: " + data.main.temp;
            
            var humidity = document.createElement("p")
            humidity.classList.add("card-text")
            humidity.textContent = "Humidity: " + data.main.humidity;

            var windSpeed = document.createElement("p")
            windSpeed.classList.add("card-text")
            windSpeed.textContent = data.wind;

            var uvIndex = document.createElement("p")
            uvIndex.classList.add("card-text")
            uvIndex.textContent = data.main.uvIndex;

            var card = document.createElement("div")
            card.classList.add("card")

            var cardBody = document.createElement("div")
            cardBody.classList.add("card-body")
            
            cardBody.appendChild(title);
        
            cardBody.appendChild(temp);
            cardBody.appendChild(humidity);
            cardBody.appendChild(windSpeed);
            cardBody.appendChild(uvIndex);
            card.appendChild(cardBody);

            today.append(card);

            getUV(data.coord.lat, dat.coord.lon)

            fiveDayForecast(searchVal)

        })
    
}

function fiveDayForecast(searchVal) {
    // fetch
    // create cards
    // list of 40 (every 3 hours)
    // for loop (var i = 0, i < 40, i = i + 8) {

    }

function getUV(lat, lon) {
    // fetch 
    // create a card
    // modify for red or green

}

// for project 4 
// check for button reset 













document.querySelector("#searchBtn").addEventListener("click", getSearch)