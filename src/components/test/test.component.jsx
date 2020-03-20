import React, { useState } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { getWeatherStart } from '../../redux/weather/weather.actions'
import {
  selectCurrentWeather,
  selectWeatherError
} from '../../redux/weather/weather.selectors'

const TestComponent = ({ getWeatherStart, currentWeather, weatherError }) => {
  const [query, setQuery] = useState('Chandigarh')

  const handleChange = event => {
    setQuery(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    getWeatherStart(query)
  }

  const { placeName, forecast } = currentWeather

  return (
    <>
      <h1>{placeName || 'Place'}</h1>
      <h4>{forecast || 'Complete Forecase'}</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
        ></input>
        <button type="submit">Get</button>
      </form>
      {weatherError ? (
        <p style={{ color: 'red' }}>{weatherError.message}</p>
      ) : null}
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  currentWeather: selectCurrentWeather,
  weatherError: selectWeatherError
})

const mapDispatchToProps = dispatch => ({
  getWeatherStart: query => dispatch(getWeatherStart(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)
