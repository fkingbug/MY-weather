import React, { useState, useMemo } from 'react'

import SearchBox from '../SearchBox'
import Switch from '../UI/switch/Switch'

import { imgSsearch } from '../../img'
import cl from './LeftSide.module.scss'

const LeftSide = ({
  actuale,
  citys,
  searchValue,
  setSearchValue,
  axiosGetWeather,
  isToggled,
  setIsToggled,
}) => {
  const style = useMemo(() => imgSsearch(actuale.name, actuale.country), [actuale])
  return (
    <div style={style} className={cl.leftSide}>
      <div className={cl.header}>
        <div
          style={{ width: '50px', height: '25px', backgroundColor: 'white' }}
          className="logo"></div>
        <div className={cl.searchWeather}>
          <SearchBox
            citys={citys}
            actuale={actuale}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            axiosGetWeather={axiosGetWeather}
          />
          <Switch isToggled={isToggled} setIsToggled={() => setIsToggled(!isToggled)} />
        </div>
      </div>
      <h1>{actuale.name}</h1>
    </div>
  )
}

export default LeftSide
