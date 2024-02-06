const key = "89a77e9ba49f4558e7cb873d33e32be1";
const button = document.getElementById('search-city')

function insertData(data) {

    document.querySelector('#time-in-city').innerHTML = `Tempo em ${data.name} (${data.sys.country})`

    document.querySelector('#city-degrees').innerHTML = `${Math.round(data.main.temp)}°C`

    document.querySelector('#weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

    document.querySelector('#weather-text').innerHTML = `${data.weather[0].description}`

    document.querySelector('#humidity').innerHTML = `<strong>Umidade: </strong> ${data.main.humidity}%`

    document.querySelector('#min-degrees').innerHTML = `<strong>T/Min:</strong> ${Math.round(data.main.temp_min)}°C</p>`

    document.querySelector('#max-degrees').innerHTML = `<strong>T/Max:</strong> ${Math.round(data.main.temp_max)}°C</p>`

    document.querySelector('#wind').innerHTML = `<strong>Vento:</strong> ${Math.round(data.wind.speed*2.5)}km/h</p>`

    console.log(data)
}

async function findCityApi(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json());

    insertData(data)
}

function searchCity() {
    const inputCity = document.getElementById('input-city').value
    
    findCityApi(inputCity)
    document.getElementById('input-city').value = ""
}

button.addEventListener('click', searchCity)
