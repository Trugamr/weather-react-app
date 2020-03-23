import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import './App.scss'

import WeatherPage from './pages/weather/weather.component'

import { getWeatherStart } from './redux/weather/weather.actions'
import { selectLastSearch } from './redux/weather/weather.selectors'

class App extends React.Component {
  componentDidMount() {
    const { lastSearch, getWeatherStart } = this.props
    // if (lastSearch) getWeatherStart(lastSearch)
  }

  render() {
    return (
      <div className="App">
        <WeatherPage />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  lastSearch: selectLastSearch
})

const mapDispatchToProps = dispatch => ({
  getWeatherStart: query => dispatch(getWeatherStart(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
