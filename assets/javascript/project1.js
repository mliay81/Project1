$( document ).ready(function() {
    console.log( "ready!" )


    
    
// User-selected date from HTML datepicker
$("#submit").on("click", function(event) {
    event.preventDefault()
// This will capture the date
    var date = $("#eventDate").val()
    console.log(date)
// This will convert the date to YYYYMMDD format for API use
    var cleanDate = moment(date).format("YYYYMMDD")
    console.log(cleanDate)
})




$("#zipSubmit").click(function() {
    event.preventDefault()
    var zip = $("#zip").val()
    console.log(zip)

    var queryURL = "https://api.apixu.com/v1/forecast.json?key=424cbaf05adf4e88b3f12251182606&q=" + zip + "&days=10"
        
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            console.log(queryURL)
            console.log(response)
            console.log(response.location.name)
            console.log(response.forecast.forecastday)

            for (var i = 0; i < response.forecast.forecastday.data; i++) {
                console.log(i)
            }
            

            $("#city").html("City: " + response.location.name)
            $("#weatherResults").html("Forecast: " + i++)
        })

        
})



})