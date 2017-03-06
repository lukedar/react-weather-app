const API_KEY = 'c4e735ea8bd7e7b6dc8368c752517b2d';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  return (dispatch) => {
    const url = `${BASE_URL}&q=${city}`;

    fetch(url).then(response => response.json())
      .then(response => {
        dispatch(recieveWeather(response));
      });
  };
}

export function recieveWeather(data) {
  return {
    type: FETCH_WEATHER,
    payload: data
  };
}

