import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import WeatherInfoCard from '../weather-info-card/weather-info-card.component'

import { selectDailyWeather } from '../../redux/weather/weather.selectors'

import {
  WeatherCardsListContainer,
  WeatherCardsContainer
} from './weather-cards-list.styles'

const WeatherCardsList = ({ dailyWeather }) => {
  return (
    <WeatherCardsListContainer>
      <WeatherCardsContainer>
        {dailyWeather
          ? dailyWeather
              .slice(0, 7)
              .map((weather, index) => (
                <WeatherInfoCard key={index} {...weather} />
              ))
          : ''}
      </WeatherCardsContainer>
    </WeatherCardsListContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  dailyWeather: selectDailyWeather
})

export default connect(mapStateToProps)(WeatherCardsList)
