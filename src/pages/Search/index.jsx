import SearchBox from '../../components/SearchBox'
import cl from './Search.module.scss'

const Search = ({ searchValue, setSearchValue, axiosGetWeather }) => {
  return (
    <div className={cl.searchMain}>
      <SearchBox
        castomStyle="searchPage"
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        axiosGetWeather={axiosGetWeather}
      />
    </div>
  )
}

export default Search
