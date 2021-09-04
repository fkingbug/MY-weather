import React from 'react'

import cl from './RigthSide.module.scss'

const index = ({ actuale }) => {
  return (
    <div className={cl.rigthSide}>
      <p className={cl.toDay}>To day</p>
      <p>{new Date().toString()}</p>
      {/* <p>{actuale.day0.main.temp}</p> */}
      <div className={cl.dayCity}></div>
    </div>
  )
}

export default index
