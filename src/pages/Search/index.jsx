import React from 'react'
import SearchBox from '../../components/SearchBox'

import cl from './Search.module.scss'

const index = ({ searchValue, setSearchValue, axiosGetWeather }) => {
  return (
    <div className={cl.mainSearch}>
      <SearchBox
        stylle
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        axiosGetWeather={axiosGetWeather}
      />
    </div>
  )
}

export default index
