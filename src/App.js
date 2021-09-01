import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Main from './pages/Main/Main'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [mainWeather, setMainWeather] = useState(null)
  const [citys, setCitys] = useState([])

  const axiosGetWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${
          searchValue ? searchValue : 'Los Angeles'
        }&appid=5c02c94d726db1563810b36a96db3c02`,
      )
      setMainWeather(response.data)
      if (!citys.some(e => e.city.id === response.data.city.id)) {
        setCitys(prev => [...prev, response.data])
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    axiosGetWeather()
  }, [])

  return (
    <div className="App">
      <div className="content">
        {mainWeather && (
          <Main
            mainWeather={mainWeather}
            citys={citys}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            axiosGetWeather={axiosGetWeather}
          />
        )}
      </div>
    </div>
  )
}

export default App
