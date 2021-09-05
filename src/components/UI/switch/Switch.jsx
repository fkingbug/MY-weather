import React from 'react'

import cl from './switch.module.scss'

const Switch = ({ isToggled, setIsToggled }) => {
  return (
    <label className={cl.switch}>
      <input type="checkbox" checked={isToggled} onChange={setIsToggled} />
      <span className={`${cl.slider} `} />
    </label>
  )
}

export default Switch
