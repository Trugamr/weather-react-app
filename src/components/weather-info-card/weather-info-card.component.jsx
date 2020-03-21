import React from 'react'
import { useTheme } from 'styled-components'
import { fromUnixTime, format } from 'date-fns'

import WeatherIcon from '../weather-icon/weather-icon.component'

import {
  WeatherInfoCardContainer,
  WeatherDayText,
  WeatherTempText,
  WeatherIconContainer
} from './weather-info-card.styles'

const WeatherInfoCard = props => {
  const theme = useTheme()
  const { temperatureHigh, temperatureLow, time, icon } = props
  const avgTemp = (temperatureHigh + temperatureLow) / 2
  const day = format(fromUnixTime(time), 'E')

  const roundAndFix = (n, d) => {
    const m = Math.pow(10, d)
    return Math.round(n * m) / m
  }

  return (
    <WeatherInfoCardContainer theme={theme}>
      <WeatherDayText>{day.toLowerCase()}</WeatherDayText>

      <WeatherIconContainer>
        <WeatherIcon iconName={icon} />
      </WeatherIconContainer>

      <WeatherTempText>{roundAndFix(avgTemp, 1)}º</WeatherTempText>
    </WeatherInfoCardContainer>
  )
}

export default WeatherInfoCard
