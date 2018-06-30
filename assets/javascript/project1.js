$( document ).ready(function() {

  //Initialize the AOS lib
AOS.init();

  //Global variables for eventful api
var apiKey = "&app_key=Z7xkcSgfKkKgMTxQ";
var baseUrl = "https://api.eventful.com/json/events/search?";
var location = "&l=";
var milesWithin = "&within10&units=miles";
var date = "&date=Today";
var queryUrlEvent = "";
const zipCodeRegex = /^\d{5}((?:[-\s]\d{4})|(\d{4}))?$/;


$("#zipSubmit").on("click", function (event) {
  event.preventDefault;

  resetDisplay();

  var zipCode = verifyZipCode($("#zip").val().trim());
  console.log(zipCode);
  var zipLocation = location + zipCode;
  
  queryUrlEvent = baseUrl + zipLocation + milesWithin + date + apiKey;
  

  //Ajax call to eventful api
  $.ajax({
    url: queryUrlEvent,
    method: 'GET'
  }).then(function (response) {

    var data = JSON.parse(response); //Convert Json text to a javascript's object
    var eventsResult = data.events.event;
    for (i = 0; i < eventsResult.length; i++) {
      appendEvent(eventsResult, i)
    }
  })


var queryUrlRestaurant = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant+near+" + zipCode + "&units=miles&radius=5000&key=AIzaSyDGgpT5rI2_KH0Ny97NXtTiPSGXtgnNlac"

  //Ajax call to google api
  $.ajax({
      url: queryUrlRestaurant,
      method: "GET",
      dataType: "json",
      // this headers section is necessary for CORS-anywhere
      headers: {
        "x-requested-with": "xhr",
      }
    }).done(function(response) {
      console.log('CORS anywhere response', response);


      // This will pick a random restaurant choice from the Google API results then append it to an existing HTML div
      var name = response.results[Math.floor(Math.random() * response.results.length)].name
      console.log("random: " + name)
      var random = $("<div>").html("Try this restaurant near by: " + name)
      $("#restaurant-div").append(random)

      // This is part of the CORS code 
      }).fail(function(jqXHR, textStatus) {
          console.error(textStatus)
      })


    //Ajax call to weather api
    var queryURLWeather = "https://api.apixu.com/v1/forecast.json?key=424cbaf05adf4e88b3f12251182606&q=" + zipCode + "&days=1"

    $.ajax({
            url: queryURLWeather,
            method: "GET"
        })
        .then(function(response) {

        var weatherCondition = response.forecast.forecastday[0].day.condition.text;
        var maxTempF = response.forecast.forecastday[0].day.maxtemp_f;
        var icon = "https://" + response.forecast.forecastday[0].day.condition.icon;
        var currentLocation = response.location.name;
       
        var image = $("<img>");
        var weatherDiv = $("<div>");
        image.attr("src", icon);
        weatherDiv.attr("id", "weatherDiv")
        

        weatherDiv.html("Current forecast for " +currentLocation + " is " + weatherCondition + " with a high temperature of " + maxTempF);
        $("#weather-div").append(weatherDiv);
        $("#weather-div").append(image);

        })
})

//START HELPER METHODS REGION***************************************************
function appendEvent(eventsResult, i) 
 {
    var title = verifyNullOrUndefined(eventsResult[i].title);
    var startTime = verifyNullOrUndefined(eventsResult[i].start_time);
    var stopTime = verifyNullOrUndefined(eventsResult[i].stop_time)
    var venueName = verifyNullOrUndefined(eventsResult[i].venue_name);
    var venueAddress = verifyNullOrUndefined(eventsResult[i].venue_address);
    var description = verifyNullOrUndefined(eventsResult[i].description);
    var url = verifyNullOrUndefined(eventsResult[i].url);

    var eventDiv = $("<div>");
    eventDiv.attr("id", "event-item");
    eventDiv.html("<p><span>Event Name: </span>" + title + "</p><p><span>Start and End Time: </span>" + startTime + " -- " + stopTime + "</p><p><span>Venue Name: </span>" + venueName + "</p><p><span>Venue Address: </span>" + venueAddress + "</p><p><span>Description: </span>" + description + "</p><a href='" + url + "'>" + url + "</a>")
    $("#event-div").append(eventDiv);
    $("#canvas-basic").css("height", "4500px");
  }


function verifyNullOrUndefined(value) 
{
    if (value === null || value === undefined) {
      value = "Not available";
    }
    return value;
}

function resetDisplay()
{
  $("#message-div").html("");
  $("#weather-div").html("");
  $("#event-div").html("");
  $("#restaurant-div").html("");
}

function verifyZipCode(zipcode)
{
  if(!zipCodeRegex.test(zipcode)){
    $("#message-div").html("<p>Please enter valid zipcode</p>");
  }
  else{
    return zipcode;
  }
}
//END HELPER METHODS REGION

// External libraries and code-----------------------------------------------------------------------------------------------
  var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'basic-gradient',
    direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states: {
      "default-state": {
        gradients: [
          ['#AA076B', '#61045F'],
          ['#02AAB0', '#00CDAC'],
          ['#DA22FF', '#9733EE']
        ]
      }
    }
  });

var loop = true;
var easing = 'linear';
var direction = 'alternate';

anime({
  targets: '.ball',
  translateX: 470,
  translateY: 50,
  easing,
  loop,
  direction,
  background: [
    { value: '#573796' }, 
    { value: '#FB89FB' },
    { value: '#FBF38C' },
    { value: '#18FF92' },
    { value: '#5A87FF' }
  ]
})
var ballTimeline = anime.timeline({
  loop,
  direction
})
var bar2Timeline = anime.timeline({
  loop,
  direction
})
var bar1Timeline = anime.timeline({
  loop,
  direction
})
ballTimeline
.add({
  targets: '.ball',
  translateY: 50,
  translateX: 470,
  easing
}).add({
  targets: '.ball',
  translateY: 0,
  translateX: 0,
  easing
}).add({
  targets: '.ball',
  translateY: '-40',
  translateX: 470,
  easing
})
bar2Timeline
.add({
  targets: '.bar2',
  translateY: 50,
  easing,
  background: '#573796'
}).add({
  targets: '.bar2',
  translateY: 0,
  easing,
  background: '#FB89FB'
}).add({
  targets: '.bar2',
  translateY: '-50',
  easing,
  background: '#FBF38C'
})
bar1Timeline
.add({
  targets: '.bar1',
  translateY: '-50',
  easing,
  background: '#18FF92'
}).add({
  targets: '.bar1',
  translateY: 10,
  easing,
  background: '#5A87FF'
}).add({
  targets: '.bar1',
  translateY: 40,
  easing,
  background: '#FF1461'
})

})