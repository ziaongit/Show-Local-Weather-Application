
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
    var humidity = document.getElementById('humidity');
    var wind = document.getElementById('wind');
    var direction = document.getElementById('direction');

    var weather = {};
    weather.temperature = '45';
    weather.loc = 'Stockholm';
    weather.icon = 200;
    weather.humidity = 35;
    weather.wind = 3.5;
    weather.direction = 'N';
    
    update(weather);
};

/* --------------------------
     START APP END
--------------------------- */


/* --------------------------
     UPDATE START
--------------------------- */
function update(weather) {
    temperature.innerHTML = weather.temperature;
    loc.innerHTML = weather.loc;
    icon.src = 'resources/images/codes/'+weather.icon+'.png';
    humidity.innerHTML = weather.humidity;
    wind.innerHTML = weather.wind;
    direction.innerHTML = weather.direction;
};
/* --------------------------
     UPDATE END
--------------------------- */



    this.init();
})();