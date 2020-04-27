import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import './App.scss'

import { Route, Switch } from 'react-router-dom'

import WeatherPage from './pages/weather/weather.component'
import HomePage from './pages/home/home.component'

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
        <Switch>
          <Route exact path="/weather" component={WeatherPage} />
          <Route path="*" component={HomePage} />
        </Switch>
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
