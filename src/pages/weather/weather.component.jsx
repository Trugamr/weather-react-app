import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/header/header.component'
import ArcRangeSlider from '../../components/arc-range-slider/arc-range-slider.component'
import BriefDetails from '../../components/brief-details/brief-details.component'
import DetailsSlider from '../../components/details-slider/details-slider.component'

import {
  WeatherPageContainer,
  TopContainer,
  BriefDetailsContainer,
  BottomContainer,
  ArchContainer
} from './weather.styles'

import { getWeatherStart } from '../../redux/weather/weather.actions'

class WeatherPage extends React.Component {
  componentDidMount() {
    const { history, getWeatherStart } = this.props
    const query = this.getQueryParams()

    if (query) {
      const search = query.get('s')
      if (search) {
        getWeatherStart(search)
      } else {
        history.push('/')
      }
    }
  }

  getQueryParams() {
    const { location } = this.props
    if (location && location.search) {
      return new URLSearchParams(location.search)
    } else return null
  }

  render() {
    return (
      <WeatherPageContainer>
        <TopContainer>
          <Header />
        </TopContainer>
        <ArchContainer>
          <ArcRangeSlider />
        </ArchContainer>
        <BriefDetailsContainer>
          <BriefDetails />
        </BriefDetailsContainer>
        <BottomContainer>
          <DetailsSlider />
        </BottomContainer>
      </WeatherPageContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getWeatherStart: query => dispatch(getWeatherStart(query))
})

export default connect(null, mapDispatchToProps)(WeatherPage)
