(function WeatherApplication(){
    this.init =function() {
        this.startApp();
    };

/* --------------------------
    START APP START
--------------------------- */
this.startApp = function(){
    var temperature = document.getElementById('temperature');
    var loc = document.getElementById('loc');
    var icon = document.getElementById('icon');
    var description = document.getElementById('description');
    var humidity = document.getElementById('humidity');
    var wind = document.getElementById('wind');
    var direction = document.getElementById('direction');
    

    updateByLaLo();
    
    //update(weather);
};

/* --------------------------
     START APP END
--------------------------- */

/* --------------------------
     UPDATE BY ZIP START
--------------------------- */
this.updateByLaLo = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    
    function showPosition(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var url = 'https://fcc-weather-api.glitch.me/api/current?lat='+latitude+'&lon='+longitude;
       //var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=dc6951009c69e18093fa15d39678b152';
        sendRequest(url);
        }
}
/* --------------------------
     UPDATE BY ZIP END
--------------------------- */

/* --------------------------
     SEND REQUEST START
--------------------------- */
this.sendRequest = function(url) {
    
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if(xhttp.readyState == 4 && xhttp.status == 200){
            var data = JSON.parse(xhttp.responseText);
            var weather = {};
            weather.temperature =data.main.temp;
            weather.loc = data.name;
            weather.icon = data.weather[0].icon;
            weather.description = data.weather[0].description;
            weather.humidity = data.main.humidity;
            weather.wind = data.wind.speed;
            weather.direction = data.wind.deg;
            update(weather);
        }else {
          console.log('Error: ReadyState:'+xhttp.readyState+' status:'+xhttp.status);
        }
    };

    xhttp.open('GET', url, true);
    xhttp.send();
}

/* --------------------------
     SEND REQUEST END
--------------------------- */

/* --------------------------
     UPDATE START
--------------------------- */
this.update = function(weather) {
    console.log(weather);
    temperature.innerHTML = weather.temperature;
    loc.innerHTML = weather.loc;
    icon.src = weather.icon;
    description.innerHTML = weather.description;
    humidity.innerHTML = weather.humidity;
    wind.innerHTML = weather.wind;
    direction.innerHTML = weather.direction;
};
/* --------------------------
     UPDATE END
--------------------------- */


    this.init();
})();