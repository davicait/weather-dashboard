# weather-dashboard

Build a weather dashboard application with search functionality to find current weather conditions and the future weather outlook for multiple cities. Following the common templates for user stories, we can frame this challenge as follows:
As a traveler
I want to see the weather outlook for multiple cities
so that I can plan a trip accordingly
How do you deliver this? Here are some guidelines:


Use the OpenWeather API to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions.


Use AJAX to hook into the API to retrieve data in JSON format.


Your app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.


Display the following under current weather conditions:


City
Date
Icon image (visual representation of weather conditions)
Temperature
Humidity
Wind speed
UV index

Include a search history so that users can access their past search terms. Clicking on the city name should perform a new search that returns current and future conditions for that city.

Include a 5-Day Forecast below the current weather conditions. Each day for the 5-Day Forecast should display the following:

Date
Icon image (visual representation of weather conditions)
Temperature
Humidity

Minimum Requirements


Functional, deployed application.


GitHub repository with a unique name and a README describing the project.


User can search for weather reports by city using the openweathermap API.


After searching for a city, the following information is displayed:


Current temperature


Current humidity


Windspeed


Uv index


5 day forecast




Application uses icons to represent weather conditions.


Application stores previously searched for cities in localstorage and displays them to the user.


Application loads last searched city forecast on page load.
