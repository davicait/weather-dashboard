// Variables

var citySearch = $("#citySearch").val();
var pastSearch = $(".list-group");
var cityInput = $("#cityInput").val();
var chosenCity = $("#choosenCity");
var temp = $(".temp");
var humidity = $(".humidity");
var windSpeed = $(".windSpeed");
var UV = $(".uv");
var cityCity = [];
var date = moment().format("MMM Do YYYY");


// variables 
let cities = JSON.parse(localStorage.getItem("cityInput")) || [];


// function to update local storage with new city and load previous cities
const updateStorage = (city) => {
    console.log(citySearch);
    localStorage.setItem("cityInput", JSON.stringify(cityInput)); // you have to json to store into a string. it is an array
    localStorage.setItem("citySearch", city);
}

// function to city items on screen
const renderCities = (items) => {
    let lastCity = localStorage.getItem("citySearch"); // number OR 0
    console.log(items)
    if (items.length == 0) items = lastCity;
    const fbody = $(".list-group")
    fbody.empty();

    console.log(items);

    items.forEach(item => {
        console.log(item)
        const row = `<li data-id=${item}>${item}</li>`;
        fbody.append(row);
        console.log(renderCities)
    })
}

// click event for user city search. 
//Gather user input and add item to citySerach array
//fields and trigger localStorage update/budgetItems rerender functions, once created

// $("#go").on("click", function (event) {
//     event.preventDefault();

//     


// API Key
var APIKey = "166a433c57516f51dfab1f7edaed8413";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Denver,Colorado&units=imperial&appid=" + APIKey;


$.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (response) {
        console.log(queryURL);
        console.log(response);

        // On page load - load these weather details about Denver
        $("#choosenCity").html("<h1>" + response.name + " Weather Details</h1>");
        $(".windspeed").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);

    });


// On page load  - forecast details 
//2nd API call for forecast
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=denver,colorado&units=imperial&appid=" + APIKey;
$.ajax({
        url: queryURL,
        method: 'GET'
    })
    .then(function (response) {
            console.log(queryURL);
            console.log(response);

            $(".card-title1").html("Date: " + moment().add(1, 'd').format("MMM Do YYYY") + "<br/>  Forecast at noon: ");
            $(".temp1").text("Temp: " + response.list[5].main.temp);
            $(".humidity1").text("Humidity: " + response.list[5].main.humidity);

            $(".card-title2").html("Date: " + moment().add(2, 'd').format("MMM Do YYYY") + "<br/>  Forecast at noon: ");
            $(".temp2").text("Temp: " + response.list[13].main.temp);
            $(".humidity2").text("Humidity: " + response.list[13].main.humidity);

            $(".card-title3").html("Date: " + moment().add(3, 'd').format("MMM Do YYYY") + "<br/>  Forecast at noon: ");
            $(".temp3").text("Temp: " + response.list[21].main.temp);
            $(".humidity3").text("Humidity: " + response.list[21].main.humidity);

            $(".card-title4").html("Date: " + moment().add(4, 'd').format("MMM Do YYYY") + "<br/>  Forecast at noon: ");
            $(".temp4").text("Temp: " + response.list[29].main.temp);
            $(".humidity4").text("Humidity: " + response.list[29].main.humidity);

            $(".card-title5").html("Date: " + moment().add(5, 'd').format("MMM Do YYYY") + "<br/>  Forecast at noon: ");
            $(".temp5").text("Temp: " + response.list[37].main.temp);
            $(".humidity5").text("Humidity: " + response.list[37].main.humidity);

    });




            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            $("#go").on("click", function (event) {
                event.preventDefault();
                var citySearch = $("#citySearch").val();
                cityCity.push(citySearch);
                //updateStorage(citySearch);
                renderCities(cityCity);

                var APIKey = "166a433c57516f51dfab1f7edaed8413";
                var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&units=imperial&appid=" + APIKey;

                $.ajax({
                        url: queryURL,
                        method: 'GET'
                    })
                    .then(function (response) {
                        console.log(queryURL);
                        console.log(response);

                        // Transfer content to HTML
                        $("#choosenCity").html("<h1>" + response.name + " Weather Details</h1>");
                        $(".windspeed").text("Wind Speed: " + response.wind.speed);
                        $(".humidity").text("Humidity: " + response.main.humidity);
                        $(".temp").text("Temperature (F) " + response.main.temp);

                        // Log the data in the console as well
                        console.log("Wind Speed: " + response.wind.speed);
                        console.log("Humidity: " + response.main.humidity);
                        console.log("Temperature (F): " + response.main.temp);
                    });


                var options = {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                };


                //2nd API call for forecast
                var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&units=imperial" + "&appid=" + APIKey;
                $.ajax({
                        url: queryURL,
                        method: 'GET'
                    })
                    .then(function (response) {
                        console.log(queryURL);
                        console.log(response);

                        $(".card-title1").html()
                        $(".temp1").text("Temp: " + response.list[5].main.temp);
                        $(".humidity1").text("Humidity: " + response.list[5].main.humidity);

                        $(".card-title2").html()
                        $(".temp2").text("Temp: " + response.list[13].main.temp);
                        $(".humidity2").text("Humidity: " + response.list[13].main.humidity);

                        $(".card-title3").html()
                        $(".temp3").text("Temp: " + response.list[21].main.temp);
                        $(".humidity3").text("Humidity: " + response.list[21].main.humidity);

                        $(".card-title4").html()
                        $(".temp4").text("Temp: " + response.list[29].main.temp);
                        $(".humidity4").text("Humidity: " + response.list[29].main.humidity);

                        $(".card-title5").html()
                        $(".temp5").text("Temp: " + response.list[37].main.temp);
                        $(".humidity5").text("Humidity: " + response.list[37].main.humidity);




                    });


            });
         


