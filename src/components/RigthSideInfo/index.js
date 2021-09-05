import React from 'react'
import DaysContent from '../DaysContent'

import { weatherImg } from '../../img'
import cl from './RigthSideInfo.module.scss'

const RigthSideInfo = ({ actuale, isToggled }) => {
  const getDay = () => {
    let data = new Date().toString().split(' ').splice(0, 4)
    return [data[0], data[2], data[1], data[3]].join(' ')
  }

  return (
    <>
      <p className={cl.toDay}>To day</p>
      <p className={cl.centerS}>{getDay()}</p>
      <div className={cl.mainDay}>
        {!isToggled ? (
          <p className={cl.pos}>
            {actuale.days[0].tempCelsius.celsius}°
            <span className={cl.cOrF}>{actuale.days[0].tempCelsius.name}</span>
            <div style={weatherImg(actuale.days[0].weather)} className={cl.weatherMainDay}></div>
          </p>
        ) : (
          <p className={cl.pos}>
            {actuale.days[0].tempFahrenheit.fahrenheit}°
            <span className={cl.cOrF}> {actuale.days[0].tempFahrenheit.name}</span>
            <div style={weatherImg(actuale.days[0].weather)} className={cl.weatherMainDay}></div>
          </p>
        )}
      </div>
      <div className={cl.weatherInfo}>
        <div className={cl.numInfo}>
          <p>Wind </p>
          <p>{actuale.days[0].wind}м/ч</p>
        </div>
        <div className={cl.numInfo}>
          <p>Humidity </p>
          <p>{actuale.days[0].humidity}%</p>
        </div>
        <div className={cl.numInfo}>
          <p>Pressure </p>
          <p>{actuale.days[0].pressure}</p>
        </div>
      </div>
      <div className={cl.nextDay}>
        {actuale.days.map((e, i) =>
          i !== 0 ? <DaysContent key={e.name} actuale={e} isToggled={isToggled} /> : null,
        )}
      </div>
    </>
  )
}

export default RigthSideInfo
