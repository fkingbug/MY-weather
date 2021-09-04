import React from 'react'

import LeftSide from '../../components/LeftSide'
import RigthSide from '../../components/RigthSide'

import cl from './Main.module.scss'

const Main = ({ citys, mainWeather, searchValue, setSearchValue, axiosGetWeather }) => {
  return (
    <div className={cl.main}>
      <LeftSide
        citys={citys}
        actuale={mainWeather}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        axiosGetWeather={axiosGetWeather}
      />
      <RigthSide actuale={mainWeather} />
    </div>
  )
}

export default Main
