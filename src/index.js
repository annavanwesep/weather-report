// const { default: axios } = require('axios');

// const so 72 is not hard coded, used in increaseTemp & decreaseTemp functions
const tempValue = document.getElementById('tempValue');


// assign a constant state for temp
const state = {
    tempCount : tempValue.innerText, 
    city: "Seattle"
}

// assign variable for landscape and sky image icons

const landscapeEmojis = {
    "1" : "🌞🌵___🐍🦂__🌵🌞",
    "2" : "🌸🌿__🌷🌻🌷__🌿🌸",
    "3" : "🦚__🍄🌳🪷🌳🍄__🦚",
    "4" : "__🍂🍂🍁🍁🍁🍂🍂__",
    "5" : "⛄️🌲______🌲⛄️",
};

const skyEmojis = {
    "0" : "☁️ ☁️ ☁️ ☀️ ☁️ ☁️",
    "1": "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️",
    "2" : "🌧🌈🌧💧🌈🌈💧🌧🌈🌧",
    "3" : "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
};

// add 1 degree to temp
// had to transform str to int to +1 properly, otherwise it was 721
// innerText is a key on the element span with id "tempValue"
// go to dev tools console and click the up and down arrows, see the console!
const increaseTemperature = () => {
    state.tempCount = Number(state.tempCount) + 1;
    tempValue.innerText = state.tempCount;
    tempRange();
    console.log(state.tempCount)
    // changeTemperature()
};

// subtract 1 degree to temp
// had to transform str to int to -1 properly
// innerText is a key on the element span with id "tempValue"
const decreaseTemperature = () => {
    state.tempCount = Number(state.tempCount) - 1;
    tempValue.innerText = state.tempCount;
    tempRange();
    console.log(state.tempCount)
    // changeTemperature()
};

// function to set ranges for temperature and change colors
// of the temperature number & print emojis for landscape
const tempRange = () => {
    if (state.tempCount <= 49){
        const temp = document.getElementById("temperature-id")
        temp.className="teal";
        const landscape = document.getElementById("weather-garden-id")
        landscape.textContent = landscapeEmojis["5"];
    }
    else if (state.tempCount <= 59 && state.tempCount >= 50){
        const temp = document.getElementById("temperature-id")
        temp.className="green";
        const landscape = document.getElementById("weather-garden-id")
        landscape.textContent = landscapeEmojis["4"];
    }
    else if (state.tempCount <= 69 && state.tempCount >= 60){
        const temp = document.getElementById("temperature-id")
        temp.className="yellow";
        const landscape = document.getElementById("weather-garden-id")
        landscape.textContent = landscapeEmojis["3"];
    }
    else if (state.tempCount >=70 && state.tempCount <= 79){
        const temp = document.getElementById("temperature-id")
        temp.className="orange";
        const landscape = document.getElementById("weather-garden-id")
        landscape.textContent = landscapeEmojis["2"];
    }
    else if (state.tempCount >= 80){
        const temp = document.getElementById("temperature-id")
        temp.className ="red";
        const landscape = document.getElementById("weather-garden-id")
        landscape.textContent = landscapeEmojis["1"];
    }
}
// function to get city name
// const inputElement = document.getElementById("cityNameInput")

// function for calling APIs
// const searchLocation = () => {
//     const axios = require('axios');
//     const key = process.env['key'];

//     axios
//     .get('http://127.0.0.1:5000/location', {
//         params: {
//             q: state.cityName,
//         },
//     })
//     .then((response) => {
//     console.log('success!' + JSON.stringify(response.data[0]));
//     state.late = response.data[0].lat;
//     state.lon = response.data[0].lon;
//     searchTemperature();
//         })
//     .catch((error) => {
//         console.log('searchLocation error: ' +
//         error.response);
//     });
// };

// const searchTemperature = () => {
//     axios
//     .get('http://localhost:5000/weather', {
//         params: {
//         lat: state.lat,
//         lon: state.lon,
//         },
//     })
//     .then((response) => {
//         console.log('success!' + JSON.stringify(response.data.current.temp));
//         state.temp = convertKtoC(response.data.current.temp);
//         changeLandscapeTemp();
//     })
//     .catch((error) => {
//         console.log('searchTemperature error: ' + error.response);
//     });
// };

const registerEventHandlers = () => {

// assigns upTempArrow to that specific button. Document keyword grabs everything in index.html
// then you run func on document called querySelector. Then you are grabbing the id of increaseTempControl
// Do not need # in front of decreaseTempControl bc .getElementById does it automatically
const downTempArrow = document.getElementById("decreaseTempControl");
downTempArrow.addEventListener("click", decreaseTemperature);

const upTempArrow = document.getElementById("increaseTempControl");
upTempArrow.addEventListener("click", increaseTemperature);
    
    // updateCityHeader();
    // const updateCity = document.getElementById("cityNameInput");
    // updateCity.addEventListener('input', updateCityHeader)
};

// previously didn't exist, calls function here to register events
registerEventHandlers();



// registercityName and change location functions
// inputElement.addEventListener("input", function () {
//     const cityName = inputElement.tempValue;
//     const cityNameInput = document.querySelector("h3");
//     cityName.textContent = "For the lovely city of " + cityName;

// const changeLocation = document.querySelector('cityNameInput');
// changeLocation.addEventListener('click', searchLocation);
// });