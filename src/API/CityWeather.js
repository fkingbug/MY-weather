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
  return { ...nameAndCountry, days: days }
}
