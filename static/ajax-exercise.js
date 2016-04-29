"use strict";


// PART 1: SHOW A FORTUNE

function replaceFortune(fortune){
	$("#fortune-text").html(fortune);
	}

function showFortune(evt) {
	$.get("/fortune", replaceFortune);
	}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function replaceWeather(weather){
	//get forecast from weather
	var our_forecast = weather["forecast"];
	$("#weather-info").html(our_forecast);
	}

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, replaceWeather);

}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


