import React, { useState, useMemo } from 'react'

import SearchBox from '../SearchBox'
import Switch from '../UI/switch/Switch'
import { city, country } from '../../img'
import cl from './LeftSide.module.scss'

const LeftSide = ({ mainWeather, citys, searchValue, setSearchValue, axiosGetWeather }) => {
  const [switchTemp, setSwitchTemp] = useState(false)

  const imgSsearch = (name, cod) => {
    name = name.toLowerCase().replace(/\s/g, '')
    cod = cod.toLowerCase().replace(/\s/g, '')

    if (city[name]) {
      return city[name]
    }
    if (country[cod]) {
      return country[cod]
    }
    return country.default
  }

  const img = useMemo(
    () => imgSsearch(mainWeather.city.name, mainWeather.city.country),
    [mainWeather],
  )

  const style = {
    background: `linear-gradient( rgba(38, 39 ,48, 0.6), rgba(38, 39 ,48, 0.6) ),url(${img}) 0% 0% / cover no-repeat`,
  }
  return (
    <div style={style} className={cl.leftSide}>
      <div className={cl.header}>
        <div
          style={{ width: '50px', height: '25px', backgroundColor: 'white' }}
          className="logo"></div>
        <div className={cl.searchWeather}>
          <SearchBox
            citys={citys}
            mainWeather={mainWeather}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            axiosGetWeather={axiosGetWeather}
          />
          <Switch />
        </div>
      </div>
      <h1>{mainWeather.city.name}</h1>
    </div>
  )
}

export default LeftSide
