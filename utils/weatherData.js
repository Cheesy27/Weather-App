const request = require('request');

//api key
const openWeatherMap = {
    SECRET_KEY: '373937a5b373d7682f7e109a6d4b3b23',
    BASE_URL: 'https://api.openweathermap.org/data/2.5/weather?q=',
}


const weatherData = (address, callback) => {
    const url =
      openWeatherMap.BASE_URL +
      encodeURIComponent(address) +
      "&APPID=" +
      openWeatherMap.SECRET_KEY;
    console.log(url);
    request({ url, json: true }, (error, data) => {
      if (error) {
        callback(true, "Unable to fetch data, Please try again. " + error);
      }
      callback(false, data?.body);
    });
  };
  
  module.exports = weatherData;