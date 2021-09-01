import React, { useMemo } from 'react'
import SearchBox from '../../components/SearchBox'

import { city, country } from '../../img'
import cl from './Main.module.scss'

const Main = ({ mainWeather, citys, searchValue, setSearchValue, axiosGetWeather }) => {
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
  console.log(img)

  const style = {
    background: `linear-gradient( rgba(38, 39 ,48, 0.6), rgba(38, 39 ,48, 0.6) ),url(${img}) 0% 0% / cover no-repeat`,
  }

  return (
    <div className={cl.main}>
      <div style={style} className={cl.leftSide}>
        <div className={cl.header}>
          <div
            style={{ width: '50px', height: '25px', backgroundColor: 'white' }}
            className="logo"></div>
          <div className={cl.searchWeather}>
            <SearchBox
              mainWeather={mainWeather}
              citys={citys}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              axiosGetWeather={axiosGetWeather}
            />
          </div>
        </div>
        <h1>{mainWeather.city.name}</h1>
      </div>

      <div className={cl.rigthSide}>{mainWeather.list[0].main.temp}</div>
    </div>
  )
}

export default Main
