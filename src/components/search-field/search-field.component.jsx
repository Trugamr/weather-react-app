import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter, useLocation } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { SearchFieldForm, SearchInput } from './search-field.styles'

import { getWeatherStart } from '../../redux/weather/weather.actions'
import { selectPlaceName } from '../../redux/weather/weather.selectors'

const SearchField = ({
  searchValue = '',
  placeName,
  getWeatherStart,
  history,
  match: { url = '/' }
}) => {
  const [search, setSearch] = useState(searchValue)
  const queryParams = new URLSearchParams(useLocation().search)

  // update search input value to placeName
  useEffect(() => {
    if (placeName) setSearch(placeName.split(',')[0])
  }, [placeName])

  // get weather on query parameter change
  useEffect(() => {
    const searchParam = queryParams.get('s')
    if (searchParam) {
      getWeatherStart(searchParam)
    } else {
      history.push('/')
    }
  }, [queryParams])

  const handleSubmit = event => {
    event.preventDefault()
    history.push(`${url}?s=${search}`)
  }

  const handleChange = event => {
    setSearch(event.target.value)
  }

  return (
    <SearchFieldForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="query"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
    </SearchFieldForm>
  )
}

const mapStateToProps = createStructuredSelector({
  placeName: selectPlaceName
})

const mapDispatchToProps = dispatch => ({
  getWeatherStart: search => dispatch(getWeatherStart(search))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchField)
)
