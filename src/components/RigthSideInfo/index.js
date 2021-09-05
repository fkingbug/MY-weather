import React from 'react'
import DaysContent from '../DaysContent'

import cl from './RigthSideInfo.module.scss'

const RigthSideInfo = ({ actuale }) => {
  const getDay = () => {
    let data = new Date().toString().split(' ').splice(0, 4)
    return [data[0], data[2], data[1], data[3]].join(' ')
  }

  return (
    <>
      <p className={cl.toDay}>To day</p>
      <p className={cl.centerS}>{getDay()}</p>
      <div className={cl.mainDay}>
        <p className={cl.pos}>
          {Math.ceil(actuale.days[0].main.temp - 273.15)}°<span className={cl.cOrF}>c</span>
        </p>
      </div>
      <div className={cl.weatherInfo}>
        <div className={cl.numInfo}>
          <p>Wind </p>
          <p>{actuale.days[0].wind.speed}м/ч</p>
        </div>
        <div className={cl.numInfo}>
          <p>Humidity </p>
          <p>{actuale.days[0].main.humidity}%</p>
        </div>
        <div className={cl.numInfo}>
          <p>Pressure </p>
          <p>{actuale.days[0].main.pressure}</p>
        </div>
      </div>
      <div className={cl.nextDay}>
        {actuale.days.map((e, i) => (i !== 0 ? <DaysContent actuale={e} /> : null))}
      </div>
    </>
  )
}

export default RigthSideInfo
