import React, { useState } from 'react'
import RigthSideInfo from '../RigthSideInfo'

import cl from './RigthSide.module.scss'

const RigthSide = ({ actuale }) => {
  const [citysIcon, setCitysIcon] = useState(false)

  return (
    <div className={cl.rigthSide}>
      <div className={cl.mainInfo}>{!citysIcon ? <RigthSideInfo actuale={actuale} /> : null}</div>
      <button>switch</button>
    </div>
  )
}

export default RigthSide
