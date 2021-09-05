import React from 'react'
import cl from './DaysContent.module.scss'

import { weatherImg } from '../../img'
const DaysContent = ({ actuale, isToggled }) => {
  const getDay = () => {
    return new Date(actuale.date).toString().split(' ')[0]
  }

  return (
    <div className={cl.week}>
      <p>{getDay()}</p>
      <div style={weatherImg(actuale.weather)} className={cl.imgW}></div>
      {!isToggled ? (
        <p className={cl.pos}>
          {actuale.tempCelsius.celsius}°<span className={cl.cOrF}>{actuale.tempCelsius.name}</span>
        </p>
      ) : (
        <p className={cl.pos}>
          {actuale.tempFahrenheit.fahrenheit}°
          <span className={cl.cOrF}> {actuale.tempFahrenheit.name}</span>
        </p>
      )}
    </div>
  )
}

export default DaysContent
