import axios from "axios";
import { config } from "process";

export const fetchWeather = async function(city: string) {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {q: city, days: '5'},
    headers: {
      'X-RapidAPI-Key': 'acc2316080mshac947bf9f83b635p16d5c2jsn42390d9e040a',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  //axios.request(options).then((res) => res.data);

  return axios.get('https://weatherapi-com.p.rapidapi.com/forecast.json', {
    params: {q: city, days: '5'},
    headers: {
      'X-RapidAPI-Key': 'acc2316080mshac947bf9f83b635p16d5c2jsn42390d9e040a',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  }).then((res) => res.data);

}