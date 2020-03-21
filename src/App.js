import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './App.scss'

import WeatherPage from './pages/weather/weather.component'

import { getWeatherStart } from './redux/weather/weather.actions'

function App({ getWeatherStart }) {
  useEffect(() => {
    getWeatherStart('Chandigarh')
  }, [getWeatherStart])

  return (
    <div className="App">
      <WeatherPage />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  getWeatherStart: query => dispatch(getWeatherStart(query))
})

export default connect(null, mapDispatchToProps)(App)
