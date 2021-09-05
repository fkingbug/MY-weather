import React from 'react'

import CloseIcon from '@material-ui/icons/Close'
import Citys from '../citys'

import cl from './CitysSpisok.module.scss'

const CitysSpisok = ({ citys, mainWeather, setMainWeather, open, onClick, isToggled }) => {
  return (
    <div className={`${cl.overlay} ${open ? cl.overlayVisible : null}`}>
      <div className={cl.drawer}>
        <div className={cl.Close}>
          <CloseIcon onClick={() => onClick(false)} />
        </div>
        <div className={cl.items}>
          {citys &&
            citys.map(e => (
              <Citys onClick={e => setMainWeather(e)} actuale={e} isToggled={isToggled} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default CitysSpisok
