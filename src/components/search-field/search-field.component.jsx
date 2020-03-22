import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useTheme } from 'styled-components'

import { SearchFieldForm, SearchInput } from './search-field.styles'

import { getWeatherStart } from '../../redux/weather/weather.actions'
import { selectPlaceName } from '../../redux/weather/weather.selectors'

const SearchField = ({ searchValue = '', getWeatherStart, placeName }) => {
  const [query, setQuery] = useState(searchValue)
  const theme = useTheme()

  useEffect(() => {
    if (placeName) setQuery(placeName.split(',')[0])
  }, [placeName])

  const handleSubmit = event => {
    event.preventDefault()
    getWeatherStart(query)
  }

  const handleChange = event => {
    setQuery(event.target.value)
  }

  return (
    <SearchFieldForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="query"
        placeholder="Search"
        spellCheck="false"
        value={query}
        onChange={handleChange}
        theme={theme}
      />
    </SearchFieldForm>
  )
}

const mapStateToProps = createStructuredSelector({
  placeName: selectPlaceName
})

const mapDispatchToProps = dispatch => ({
  getWeatherStart: query => dispatch(getWeatherStart(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchField)
