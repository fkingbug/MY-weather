import React, { useState } from 'react'

import Main from './pages/Main'
import Search from './pages/Search'
import CityWeather from './API/CityWeather'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [mainWeather, setMainWeather] = useState()
  const [citys, setCitys] = useState([])

  const axiosGetWeather = async () => {
    try {
      const citySearch = await CityWeather.getAll(searchValue)
      setMainWeather(citySearch)
      if (!citys.some(e => e.id === citySearch.id)) {
        setCitys(prev => [...prev, citySearch])
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
