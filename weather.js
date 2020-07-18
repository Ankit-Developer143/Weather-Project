var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.set');
var city = document.querySelector('.country');

button.addEventListener('click', function () {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=67f8338e80b637bb046dd3f5632a4a02')
        .then(Response => Response.json()) //convert data into json format
        .then(db => { //you can take any variable(function name)

            //fetch the value from API

            var nameValue = db['name']; //in api
            var countryValue = db['sys']['country'];
            var tempValue = db['main']['temp'];

            var descValue = db['weather'][0]['description'];
            var humidityValue = db['main']['humidity'];


            //store all the value
            name.innerHTML = nameValue;
            city.innerHTML = (" Name:\t\t" + countryValue);
            temp.innerHTML = (" Tempreature is:\t\t" + tempValue + "F");
            desc.innerHTML = ("Cloud Description:\t\t" + descValue);
            humidity.innerHTML = ("Humidity:\t\t" + humidityValue);
            var upper = inputValue.value;
            city.innerHTML = ("You Entered :" + upper.toUpperCase(inputValue));
        })
        .catch(err => alert("Wrong city Name !"))
})
setInterval(function () {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    var period = "AM";

    if (hours >= 12) {
        period = "PM"
    }
    if (hours >= 12) {
        hours = hours - 12;

    }
    if (second < 10) {
        second = "0" + second;

    }
    if (minute < 10) {
        minute = "0" + minute;

    }
    var clockTime = hours + ":" + minute + ":" + second + "" + period;

    //fetch the id for styling purpose only
    var clock = document.getElementById('clock');
    document.body.style.fontSize = '35px';

    clock.innerHTML = ("Current Timing :" + clockTime);

}, 1000);
