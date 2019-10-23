var key = "c4ade069bc3f1dcd3d7be7e313f5276e";
var time = moment().format("dddd MMMM Do");


function currentCity(x) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + x + ",US&units=imperial&appid=" + key;
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + x + ",US&units=imperial&appid=" + key;

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

$.ajax({
    url: forecastURL,
    method: "GET"
   }).then(function(response){


   console.log(forecastURL);
   console.log(response);
    $("#day1").html("<div class='card-header'>" + moment().add(1, 'days').format('MMM D YYYY') + "</div> Temperature:" + response.list["5"].main.temp + "<br> Humidity:" + response.list["5"].main.humidity + "<br> <img id='#icon1' src='https://openweathermap.org/img/wn/" + response.list["5"].weather['0'].icon + "@2x.png'></img>");
    //$('#icon1').attr("src", "http://openweathermap.org/img/wn/"+ response.list["5"].weather['0'].icon);
    $("#day2").html("<div class='card-header'>" + moment().add(2, 'days').format('MMM D YYYY') + "</div> Temperature:" + response.list["13"].main.temp + "<br/> Humidity:" + response.list["13"].main.humidity + "<br> <img id='#icon1' src='https://openweathermap.org/img/wn/" + response.list["13"].weather['0'].icon + "@2x.png'></img>");
    $("#day3").html("<div class='card-header'>" + moment().add(3, 'days').format('MMM D YYYY') + "</div> Temperature:" + response.list["21"].main.temp + "<br/> Humidity:" + response.list["21"].main.humidity + "<br> <img id='#icon1' src='https://openweathermap.org/img/wn/" + response.list["21"].weather['0'].icon + "@2x.png'></img>");
    $("#day4").html("<div class='card-header'>" + moment().add(4, 'days').format('MMM D YYYY') + "</div> Temperature:" + response.list["29"].main.temp + "<br/> Humidity:" + response.list["29"].main.humidity + "<br> <img id='#icon1' src='https://openweathermap.org/img/wn/" + response.list["29"].weather['0'].icon + "@2x.png'></img>");
    $("#day5").html("<div class='card-header'>" + moment().add(5, 'days').format('MMM D YYYY') + "</div> Temperature:" + response.list["37"].main.temp + "<br/> Humidity:" + response.list["37"].main.humidity + "<br> <img id='#icon1' src='https://openweathermap.org/img/wn/" + response.list["37"].weather['0'].icon + "@2x.png'></img>");

   });
}







//load page with data to start
function loadPage() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=denver,US&units=imperial&appid=" + key;
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=Denver,US&units=imperial&appid=" + key;
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

$.ajax({
    url: forecastURL,
    method: "GET"
   }).then(function(response){


   //    src='"http://openweathermap.org/img/w" +  + ".png"'
   //    response.list[2].weather[0].icon 
      
   console.log(forecastURL);
   console.log(response);
    $("#day1").html("<div class='card-header'>" + moment().add(1, 'days').format('MMM D YYYY') + "</div> Temperature:" + response.list["5"].main.temp + "<br> Humidity:" + response.list["5"].main.humidity + "<br> <img id='#icon1' src='https://openweathermap.org/img/wn/" + response.list["5"].weather['0'].icon + "@2x.png'></img>");

    $("#day2").html("<div class='card-header'>" + moment().add(2, 'days').format('MMM D YYYY') + "</div> Temperature:" + response.list["13"].main.temp + "<br/> Humidity:" + response.list["13"].main.humidity + "<br> <img id='#icon1' src='https://openweathermap.org/img/wn/" + response.list["13"].weather['0'].icon + "@2x.png'></img>");

    $("#day3").html("<div class='card-header'>" + moment().add(3, 'days').format('MMM D YYYY') + "</div> Temperature:" + response.list["21"].main.temp + "<br/> Humidity:" + response.list["21"].main.humidity + "<br> <img id='#icon1' src='https://openweathermap.org/img/wn/" + response.list["21"].weather['0'].icon + "@2x.png'></img>");

    $("#day4").html("<div class='card-header'>" + moment().add(4, 'days').format('MMM D YYYY') + "</div> Temperature:" + response.list["29"].main.temp + "<br/> Humidity:" + response.list["29"].main.humidity + "<br> <img id='#icon1' src='https://openweathermap.org/img/wn/" + response.list["29"].weather['0'].icon + "@2x.png'></img>");

    $("#day5").html("<div class='card-header'>" + moment().add(5, 'days').format('MMM D YYYY') + "</div> Temperature:" + response.list["37"].main.temp + "<br/> Humidity:" + response.list["37"].main.humidity + "<br> <img id='#icon1' src='https://openweathermap.org/img/wn/" + response.list["37"].weather['0'].icon + "@2x.png'></img>");

   });
}




//search function

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

loadPage();