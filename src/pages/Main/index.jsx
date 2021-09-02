import React from 'react'

import LeftSide from '../../components/LeftSide'
import RigthSide from '../../components/RigthSide'

import cl from './Main.module.scss'

const Main = ({ mainWeather, citys, searchValue, setSearchValue, axiosGetWeather }) => {
  return (
    <div className={cl.main}>
      <LeftSide
        citys={citys}
        mainWeather={mainWeather}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        axiosGetWeather={axiosGetWeather}
      />
      <RigthSide mainWeather={mainWeather} />
    </div>
  )
}

export default Main
