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




// $("#zipSubmit").click(function() {
//     event.preventDefault()
//     var zip = $("#zip").val()
//     console.log(zip)

//     var queryURL = "https://api.apixu.com/v1/forecast.json?key=424cbaf05adf4e88b3f12251182606&q=" + zip + "&days=10"
//     var URL2 = "https://api.yelp.com/v3/businesses/search.location.zip_code"
    

//     $.ajax({
//             url: queryURL,
//             method: "GET"
//         })
//         .then(function(response) {
//             // console.log(queryURL)
//             console.log(response)
//             // console.log(response.location.name)
//             // console.log(response.forecast.forecastday)

//             var location = response.location.name;
            
//             for (var i = 0; i < response.forecast.forecastday.length; i++) 
//             {
            
//             // console.log(i);
//             // console.log(response.current.condition);
                
//             var imgURL = "https://" + response.forecast.forecastday[i].day.condition.icon
//             var image = $("<img>").attr("src", imgURL)
//             $("#temp").html("Temp:" + response.current.temp_f)
//             $("#city").html("City: " + response.location.name)
//             $("#weatherResults").html("Forecast:" + response.forecast.forecastday[i].day.condition.text)
//             $("#picture").append(image)
                
//             }

//         //     var imgURL = "https://" + response.forecast.forecastday[i].day.condition.icon
//         //     var image = $("<img>").attr("src", imgURL)
//         // $("#city").html("City: " + response.location.name)
//         // $("#weatherResults").html("Forecast: " + response.forecast.forecastday[i].day.text)
//         // $("#picture").append(image)

//         })

        
// })

$("#zipSubmit").click(function() {
    event.preventDefault()
    var zip = $("#zip").val()
    console.log(zip)

    // var URL2 = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + zip + "&radius=1500&type=restaurant&key=AIzaSyDGgpT5rI2_KH0Ny97NXtTiPSGXtgnNlac"
    var URL2 = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant+near+" + zip + "&units=miles&radius=5000&key=AIzaSyDGgpT5rI2_KH0Ny97NXtTiPSGXtgnNlac"
    var nextPage = "https://maps.googleapis.com/maps/api/place/textsearch/json?next_page_token=CpQCCAEAAKKS6uJmZGdZ1J_buLGPdp8Kc0UgHu3wLU5dfdbijQ3JPd316pnvpPk5tGir4SRCnjUMyaIqF2TsfcSPvFuJ3xs1-dQl-ZCcQgY3oK2bkRSQMq6DPirvE8IG-mzjso6ItB40f_pyzSdpDszaqPfopNSh5ocfWoRwMCTcg20QrpM9gwXU5LFSQ8H0ry0DCqICFZl7JyXgimtG8BwvrMKUbWqT850a1TX8QR9K5LAxZwhHARCPTQn0DMggcbPbVwbqtUONqdIohLuztQtEIaIT6hHNVMGb_ouevlxNNFv2CGXVXfEIzCRpBCPmfLR8nQXiQQNrSYznEbdB7SH1HmKKkzF189dy1kPG8b7gUydoxSPdEhAMus22L_t5xSmn9MxMBrJCGhRNKYDeZeIQNAnh0itT178TyFUdsQ&key=AIzaSyDGgpT5rI2_KH0Ny97NXtTiPSGXtgnNlac"
    console.log(URL2)
    console.log(nextPage)
    var corsURL = "https://cors-anywhere.herokuapp.com/" + URL2
    console.log(corsURL)

    $.ajax({
        url: URL2,
        method: "GET",
        dataType: "json",
        // this headers section is necessary for CORS-anywhere
        headers: {
          "x-requested-with": "xhr",
        }
      }).done(function(response) {
        console.log('CORS anywhere response', response);


        for (i = 0; i < response.results.length; i++) {
            var string = response.results[i].name.toString()
            console.log("string: " + string)
            console.log("name: " + response.results[i].name)
            var name = response.results[i].name[Math.floor(Math.random() * response.results.length)]
            console.log("random: " + name)
            $("#food").html(response.results[i].name.toString())
        
        }
        
      }).fail(function(jqXHR, textStatus) {
        console.error(textStatus)
      })

})







})