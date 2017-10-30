$(document).ready(function() {
    $.ajax({ 
        url: "http://api.openweathermap.org/data/2.5/weather?q=Sorocaba,BR&units=metric&appid=0be2840a846c68f703feb8a9bccd5137"
    }).then(function(data) {
       $('.city-name').append(data.name);
       $('.city-humidity').append(data.main.humidity + "%");
       $('.city-maxTemp').append(data.main.temp_max + "°");
       $('.city-minTemp').append(data.main.temp_min + "°");
       $('.city-weatherName').append(data.weather[0].description);
       $('.city-image').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
    });
    $.ajax({ 
        url: "http://api.openweathermap.org/data/2.5/weather?q=Orlando,USA&units=metric&appid=0be2840a846c68f703feb8a9bccd5137"
    }).then(function(data) {
       $('.city-name1').append(data.name);
       $('.city-humidity1').append(data.main.humidity + "%");
       $('.city-maxTemp1').append(data.main.temp_max + "°");
       $('.city-minTemp1').append(data.main.temp_min + "°");
       $('.city-weatherName1').append(data.weather[0].description);
       $('.city-image1').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
    });
    
    $.ajax({ 
        url: "http://api.openweathermap.org/data/2.5/weather?q=Tokyo,JP&units=metric&appid=0be2840a846c68f703feb8a9bccd5137"
    }).then(function(data) {
       $('.city-name2').append(data.name);
       $('.city-humidity2').append(data.main.humidity + "%");
       $('.city-maxTemp2').append(data.main.temp_max + "°");
       $('.city-minTemp2').append(data.main.temp_min + "°");
       $('.city-weatherName2').append(data.weather[0].description);
       $('.city-image2').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
    });
    
});