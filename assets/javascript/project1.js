var granimInstance = new Granim({
  element: '#canvas-basic',
  name: 'basic-gradient',
  direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
  opacity: [1, 1],
  isPausedWhenNotInView: true,
  image : {
    source: './assets/images/image2.jpg',
    blendingMode: 'multiply'
},
  states : {
      "default-state": {
          gradients: [
              ['#AA076B', '#61045F'],
              ['#02AAB0', '#00CDAC'],
              ['#DA22FF', '#9733EE']
          ]
      }
  }
});




// $( document ).ready(function() {
//   console.log( "ready!" )


  
  
// // User-selected date from HTML datepicker
// $("#submit").on("click", function(event) {
//   event.preventDefault()
// // This will capture the date
//   var date = $("#eventDate").val()
//   console.log(date)
// // This will convert the date to YYYYMMDD format for API use
//   var cleanDate = moment(date).format("YYYYMMDD")
//   console.log(cleanDate)
// })

// $("#zipSubmit").click(function() {
//   event.preventDefault()
//   var zip = $("#zip").val()
//   console.log(zip)

//   var queryURL = "https://api.apixu.com/v1/forecast.json?key=424cbaf05adf4e88b3f12251182606&q=" + zip + "&days=10"
      
//   $.ajax({
//           url: queryURL,
//           method: "GET"
//       })
//       .then(function(response) {
//           console.log(queryURL)
//           console.log(response)
//           console.log(response.location.name)
//           console.log(response.forecast.forecastday)

//       var locationName = $("<h1>").text(response.location.name);
//       var conditionImage = $("<a>").attr("href", response.current.text).append(conditionImage);
//       var conditionIcon = $("<img>").attr("src", response.current.icon);
//       // var trackerCount = $("<h2>").text(response.tracker_count + " fans tracking this artist");
//       // var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " upcoming events");
//       // var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");


//           for (var i = 0; i < response.forecast.forecastday.data; i++) {
//               console.log(i)
//           }
          
//           $("#weather-div").empty();
//           $("#weather-div").append(locationName,conditionImage, conditionIcon);

//           $("#city").html("City: " + response.location.name)
//           $("#weatherResults").html("Forecast: " + i++)
          
//       })

      
//     })
//   })
