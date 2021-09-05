import React, { useState, useEffect } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import LeftSide from '../../components/LeftSide'
import RigthSide from '../../components/RigthSide'

import cl from './Main.module.scss'
import CitysSpisok from '../../components/CitysSpisok'

const Main = ({
  citys,
  mainWeather,
  searchValue,
  setSearchValue,
  axiosGetWeather,
  setMainWeather,
}) => {
  const [isToggled, setIsToggled] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    setMenu(false)
  }, [mainWeather])

  return (
    <div className={cl.main}>
      <div className={cl.menu}>
        <MenuIcon onClick={() => setMenu(true)} />
      </div>
      <LeftSide
        isToggled={isToggled}
        setIsToggled={setIsToggled}
        citys={citys}
        actuale={mainWeather}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        axiosGetWeather={axiosGetWeather}
      />
      <RigthSide actuale={mainWeather} isToggled={isToggled} />
      <CitysSpisok
        onClick={e => setMenu(e)}
        citys={citys}
        mainWeather={mainWeather}
        setMainWeather={setMainWeather}
        open={menu}
        isToggled={isToggled}
      />
    </div>
  )
}

export default Main
