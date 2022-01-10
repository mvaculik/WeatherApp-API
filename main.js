
/*const api = {
  key: "f9d3b9fa9c974f7684ab797b218763be",
  base: "https://api.openweathermap.org/data/2.5/"
}


const searchbox = document.querySelector('#search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
    console.log(searchbox.value);
}

function getResults (city) {
   fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)    
      .then(weather => {
        return weather.json();
      }).then(displayToPage);
    
}


function displayToPage (weather) {
  let city = document.querySelector('#city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('#day');
  let day = document.querySelector('#date');
  date.innerText = dateBuilder(now);
  day.innerText = dateBuilder2(now);

  let temp = document.querySelector('#temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('#weather');
  weather_el.innerText = weather.weather[0].main;

  let low = document.querySelector('#min');
  low.innerText = `${Math.round(weather.main.temp_min)}°C`;
  
  let high = document.querySelector('#max');
  high.innerText = `${Math.round(weather.main.temp_max)}°C`;

}

function dateBuilder (d) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  return `${day}`;
}
  
function dateBuilder2 (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${date} ${month} ${year}`;
}
}

*/
/*
__        __     ______              _    _ _____
\ \      / /\   |  __  |   /\       | |  | |_  __|
 \ \    / /  \  | |  |_|  /  \      | |__| | | |
  \ \  / / /\ \ | |   _  / /\ \     |  __  | | |
   \ \/ / ____ \| |__| |/ ____ \    | |  | |_| |_
    \__/_/    \_\______|_/    \_\(_)|_|  |_|_____|

*/
//#########CONSOLE SECTION#########
console.log('%c ⛔️STOP DOING THIS!⛔️','color: red;font-size: 30px; background: black; font-weigh: 900;')
console.log('%c This browser feature is intended for developers. If someone told you to copy something here to trigger something or break into someones account, then know that its a scam and give that person access to your account.','color: red;font-size: 15px; background: transparent; font-weigh: 300;')
let x = new Date().toLocaleString();
console.log(x);
//#################################

const searchbox = document.querySelector('#search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
    //console.log(searchbox.value);
}

async function getResults(){
  

    const tempText = document.getElementById('temp');
    const cityText = document.getElementById('city');
    const countryText = document.getElementById('country');
    const descrip = document.getElementById('descrip');
    const img = document.getElementById('img');
    const min = document.getElementById('min');
    const max = document.getElementById('max');

    const city = searchbox.value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f9d3b9fa9c974f7684ab797b218763be`, {mode: 'cors'});

    if(response.status===404){
      alert('Error: Could not find city, please try again with a different city!');
    }

    const weatherData = await response.json();

    const cityName = weatherData.name;
    const country = weatherData.sys.country;
    const kelv = weatherData.main.temp;
    const cels = Math.round(kelv - 273.15);
    const weatherStatus = weatherData.weather[0].main;
    const statusDesc = weatherData.weather[0].description;
    const minTextKelv = weatherData.main.temp_min;
    const minTextCels = Math.round(minTextKelv - 273.15);
    const maxTextKelv = weatherData.main.temp_max;
    const maxTextCels = Math.round(maxTextKelv-273.15);

    searchbox.value = '';

    function appendToPage(){
      cityText.textContent = cityName;
      countryText.textContent = country;
      descrip.textContent = weatherStatus;
      tempText.textContent = cels + '°C';
      min.textContent = + minTextCels + '°C min';
      max.textContent = + maxTextCels + '°C max';
      determineImg();


  }
  function determineImg(){
    switch(weatherStatus){
        case 'Clear':
            img.src = './icons/Clear.png'
            break
        case 'Snow':
            img.src = './icons/Snow.png'
            break
        case 'Rain':
            img.src = './icons/Rain.png'
            break
        case 'Clouds':
            img.src = './icons/Cloud.png'
            break
        case 'Haze':
            img.src = './icons/Cloud.png'
            break
        case 'Mist':
            img.src = './icons/Cloud.png'
            break   
    }

    let now = new Date();
    let time = document.querySelector('#time');
    let date = document.querySelector('#day');
    let day = document.querySelector('#date');
    time.innerText = timeBuilder(now);
    date.innerText = dateBuilder(now);
    day.innerText = dayBuilder(now);

    function dateBuilder (d) {
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
      let day = days[d.getDay()];
      return `${day}`;
    }
      
    function dayBuilder (d) {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
    
      return `${date} ${month} ${year}`;
    }

       function timeBuilder(t){ 
         
        let minutes = t.getMinutes();
        let hour = t.getHours();
  

        if(minutes < 10) {
          return `${hour}:0${minutes}`
        }else {
          return `${hour}:${minutes}`;
        }

      }
    
    
}

appendToPage();

}
}