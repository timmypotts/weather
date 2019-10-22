var key = "c4ade069bc3f1dcd3d7be7e313f5276e";

function currentCity(x) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + x + ",US&units=imperial&appid=" + key;
  //  var forecastURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=Denver,US&units=imperial&appid=" + key;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(queryURL);
        console.log(response);
        $(".cityname").text("Current Weather for " + response.name);
        //$(".icon").append($('<img>',{id:"icon", src:"http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png" }));
        $(".temp").text("Temperature (F) " + response.main.temp);
        $(".humidity").text("Humidity: " + response.main.humidity + " %");
        $(".wind").text("Wind Speed: " + response.wind.speed + " mph");
});
}

var submit = document.getElementById("submit");

submit.addEventListener("click", function(event) {
    event.preventDefault();
    var city = $("#search").val();
    console.log("City: " + city);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://community-open-weather-map.p.rapidapi.com/forecast?q=" + city,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "8bbc585eecmshb8e825ff6561156p198f17jsn9d3a503b4c8d"
        }
    }
    
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    currentCity(city);
});