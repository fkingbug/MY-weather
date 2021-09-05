import axios from 'axios'

export default class CityWeather {
  static async getAll(searchValue) {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=5c02c94d726db1563810b36a96db3c02`,
      )
      return getActualy(response.data)
    } catch (e) {}
  }
}
const getActualy = citySearchFilter => {
  const { name, country, id } = citySearchFilter.city
  let nameAndCountry = { name, country, id }
  let days = citySearchFilter.list
    .map(e => ({ ...e, dt_txt: e.dt_txt.split(' ')[0] }))
    .filter((weather, index, arr) => index === arr.findIndex(t => t.dt_txt === weather.dt_txt))
  days = getNewDays(days)
  console.log(days)
  return { ...nameAndCountry, days: days }
}

const getNewDays = dayArr => {
  return dayArr.map(
    e =>
      (e = {
        tempCelsius: { celsius: Math.floor(e.main.temp - 273.15), name: 'C' },
        tempFahrenheit: {
          fahrenheit: Math.floor((e.main.temp - 273.15) * (9 / 5) + 32),
          name: 'F',
        },
        pressure: e.main.pressure,
        humidity: e.main.humidity,
        weather: e.weather[0].main,
        wind: e.wind.speed,
        date: e.dt_txt,
      }),
  )
}
