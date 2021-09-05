import React, { useState } from 'react'
import RigthSideInfo from '../RigthSideInfo'

import cl from './RigthSide.module.scss'

const RigthSide = ({ actuale, isToggled }) => {
  return (
    <div className={cl.rigthSide}>
      <div className={cl.mainInfo}>
        <RigthSideInfo actuale={actuale} isToggled={isToggled} />
      </div>
    </div>
  )
}

export default RigthSide
