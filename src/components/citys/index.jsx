import React from 'react'
import { weatherImg } from '../../img'

import cl from './citys.module.scss'
const Citys = ({ isToggled, actuale, onClick }) => {
  return (
    <div onClick={() => onClick(actuale)} className={cl.item}>
      <p className={cl.name}>{actuale.name}</p>
      {!isToggled ? (
        <p className={cl.pos}>
          {actuale.days[0].tempCelsius.celsius}°
          <span className={cl.cOrF}>{actuale.days[0].tempCelsius.name}</span>
        </p>
      ) : (
        <p className={cl.pos}>
          {actuale.days[0].tempFahrenheit.fahrenheit}°
          <span className={cl.cOrF}> {actuale.days[0].tempFahrenheit.name}</span>
        </p>
      )}

      <div style={weatherImg(actuale.days[0].weather)} className={cl.imgW}></div>
    </div>
  )
}

export default Citys
