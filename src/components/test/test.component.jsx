import React, { useState } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { getWeatherStart } from '../../redux/weather/weather.actions'
import {
  selectCurrentWeather,
  selectPlaceName,
  selectForecast,
  selectWeatherError
} from '../../redux/weather/weather.selectors'

import { TestComponentContainer } from './test.styles'

import TestThemePicker from '../test-theme-picker/test-theme-picker.component'
import WeatherIcon from '../weather-icon/weather-icon.component'

const TestComponent = ({
  getWeatherStart,
  currentWeather,
  placeName,
  forecast,
  weatherError
}) => {
  const [query, setQuery] = useState('Chandigarh')

  const handleChange = event => {
    setQuery(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    getWeatherStart(query)
  }

  const icon = currentWeather ? currentWeather.icon : 'clear-day'

  return (
    <TestComponentContainer>
      <WeatherIcon iconName={icon} />
      <h1>{placeName || 'Place'}</h1>
      <h4>{forecast || 'Complete Forecast'}</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
        ></input>
        <button type="submit">GET</button>
      </form>
      {weatherError ? (
        <p style={{ color: 'red' }}>{weatherError.message}</p>
      ) : null}
      <TestThemePicker />
    </TestComponentContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentWeather: selectCurrentWeather,
  placeName: selectPlaceName,
  forecast: selectForecast,
  weatherError: selectWeatherError
})

const mapDispatchToProps = dispatch => ({
  getWeatherStart: query => dispatch(getWeatherStart(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)
