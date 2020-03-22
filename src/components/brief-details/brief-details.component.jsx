import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { format, fromUnixTime, addHours } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { useTheme } from 'styled-components'

import {
  selectCurrentWeather,
  selectDailyWeather,
  selectTimezone,
  selectHourlyWeather
} from '../../redux/weather/weather.selectors'

import {
  BriefDetailsContainer,
  MinTempContainer,
  TempContainer,
  MaxTempContainer
} from './brief-details.styles'

const DownSVG = ({ theme }) => {
  return (
    <svg
      style={{ fill: theme.text, opacity: 0.8 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <path d="M0 7l3-2 9 9 9-9 3 2-12 13z" />
    </svg>
  )
}

const UpSVG = ({ theme }) => {
  return (
    <svg
      style={{ fill: theme.text, opacity: 0.8 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <path d="M0 17l3 3 9-10 9 10 3-3L12 5z" />
    </svg>
  )
}

const BriefDetails = ({
  dailyWeather,
  currentWeather,
  hourlyWeather,
  timezone
}) => {
  const theme = useTheme()

  const roundAndFix = (n, d) => {
    const m = Math.pow(10, d)
    return Math.round(n * m) / m
  }

  const formatTime = (time, hours = 0) =>
    format(
      utcToZonedTime(addHours(fromUnixTime(time), hours), timezone),
      'E eo'
    ).toUpperCase()

  return dailyWeather ? (
    <BriefDetailsContainer theme={theme}>
      <MinTempContainer>
        <span>{formatTime(dailyWeather[0].time)}</span>
        <DownSVG theme={theme} />
        <p>{roundAndFix(dailyWeather[0].temperatureMin, 1)}º</p>
      </MinTempContainer>
      <TempContainer>
        <p>{roundAndFix(currentWeather.temperature, 1)}º</p>
      </TempContainer>
      <MaxTempContainer>
        <UpSVG theme={theme} />
        <p>{roundAndFix(dailyWeather[0].temperatureMax, 1)}º</p>
        <span>{formatTime(dailyWeather[2].time)}</span>
      </MaxTempContainer>
    </BriefDetailsContainer>
  ) : (
    ''
  )
}

const mapStateToProps = createStructuredSelector({
  dailyWeather: selectDailyWeather,
  currentWeather: selectCurrentWeather,
  hourlyWeather: selectHourlyWeather,
  timezone: selectTimezone
})

export default connect(mapStateToProps)(BriefDetails)
