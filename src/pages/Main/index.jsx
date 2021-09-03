import React, { useMemo, useState } from 'react'

import LeftSide from '../../components/LeftSide'
import RigthSide from '../../components/RigthSide'

import cl from './Main.module.scss'

const Main = ({ mainWeather, citys, searchValue, setSearchValue, axiosGetWeather }) => {
  const [actuale, setActuale] = useState()

  const actualitiWeather = () => {
    const { name, country } = mainWeather.city
    let nameAndCountry = { name, country }
    mainWeather.list
      .map(e => ({ ...e, dt_txt: e.dt_txt.split(' ')[0] }))
      .filter((weather, index, arr) => index === arr.findIndex(t => t.dt_txt === weather.dt_txt))
      .forEach((e, i) => (nameAndCountry = { ...nameAndCountry, [i]: e }))
    setActuale(nameAndCountry)
  }

  return (
    <div className={cl.main}>
      <button onClick={actualitiWeather}></button>
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
