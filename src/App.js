import React, { useState } from 'react'
import axios from 'axios'

import Main from './pages/Main'
import Search from './pages/Search'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [mainWeather, setMainWeather] = useState()
  const [citys, setCitys] = useState([])

  const axiosGetWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=5c02c94d726db1563810b36a96db3c02`,
      )
      setMainWeather(response.data)
      if (!citys.some(e => e.city.id === response.data.city.id)) {
        setCitys(prev => [...prev, response.data])
      }
      setSearchValue('')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="App">
      {!mainWeather ? (
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          axiosGetWeather={axiosGetWeather}
        />
      ) : (
        <Main
          citys={citys}
          mainWeather={mainWeather}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          axiosGetWeather={axiosGetWeather}
        />
      )}
    </div>
  )
}

export default App
