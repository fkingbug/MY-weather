import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import SearchBox from '../../components/SearchBox'

import cl from './Main.module.scss'

const Main = ({ mainWeather, citys, searchValue, setSearchValue, axiosGetWeather }) => {
  return (
    <div className={cl.main}>
      <div className={cl.leftSide}>
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          axiosGetWeather={axiosGetWeather}
        />
        <p>{mainWeather.city.name}</p>
        <p>{Math.floor(mainWeather.list[0].main.temp - 273.15)} c`</p>
        <p>{mainWeather.list[0].weather[0].icon}</p>
        <p>{mainWeather.list[0].weather[0].main}</p>
        <Link to="/main">
          <p>main</p>
        </Link>
        <Link to="/citys">
          <p>citus</p>
        </Link>
      </div>

      <div className={cl.rigthSide}>
        <Switch>
          <Route path="/main">
            <h1>МЕЙН</h1>
          </Route>
          <Route path="/citys">
            <h1>GORODA</h1>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Main
