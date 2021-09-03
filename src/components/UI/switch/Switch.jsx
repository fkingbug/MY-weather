import React from 'react'

import cl from './switch.module.scss'

const Switch = () => {
  return (
    <label className={cl.switch}>
      <input type="checkbox" />
      <span className={cl.slider} />
    </label>
  )
}

export default Switch
