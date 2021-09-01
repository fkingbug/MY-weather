import MyInput from '../UI/input/MyInput'
import SearchIcon from '@material-ui/icons/Search'
import cl from './SearchBox.module.scss'

const SearchBox = ({ searchValue, setSearchValue, axiosGetWeather, castomStyle }) => {
  return (
    <div className={cl.searchBox}>
      <MyInput
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        type="text"
        placeholder="Введите город"
        onKeyPress={event => (event.key === 'Enter' ? axiosGetWeather() : null)}
      />
      <SearchIcon className={cl.btn} onClick={axiosGetWeather} />
    </div>
  )
}

export default SearchBox
