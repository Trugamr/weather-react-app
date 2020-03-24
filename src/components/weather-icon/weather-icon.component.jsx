import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { formatTime } from '../../redux/utils'

import {
  selectCurrentSliderTime,
  selectTimezone,
  selectCurrentWeatherIcon
} from '../../redux/weather/weather.selectors'

import clearDay from '../../assets/weather-icons/clear-day.svg'
import clearNight from '../../assets/weather-icons/clear-night.svg'
import cloudy from '../../assets/weather-icons/cloudy.svg'
import fog from '../../assets/weather-icons/fog.svg'
import partlyCloudyDay from '../../assets/weather-icons/partly-cloudy-day.svg'
import partlyCloudyNight from '../../assets/weather-icons/partly-cloudy-night.svg'
import rain from '../../assets/weather-icons/rain.svg'
import sleet from '../../assets/weather-icons/sleet.svg'
import snow from '../../assets/weather-icons/snow.svg'
import wind from '../../assets/weather-icons/wind.svg'

import { WeatherIconContainer, WeatherIconImage } from './weather-icon.styles'

const WeatherIcon = ({
  iconName,
  showCurrentSliderTime,
  currentSliderTime,
  timezone,
  currentIcon,
  ...props
}) => {
  const ICON_MAP = {
    'clear-day': clearDay,
    'clear-night': clearNight,
    rain,
    sleet,
    wind,
    fog,
    snow,
    cloudy,
    'partly-cloudy-day': partlyCloudyDay,
    'partly-cloudy-night': partlyCloudyNight
  }

  return (
    <WeatherIconContainer {...props}>
      {showCurrentSliderTime ? (
        <span>
          {formatTime(currentSliderTime, { timezone, formatString: 'hh:mm b' })}
        </span>
      ) : (
        ''
      )}
      <WeatherIconImage
        src={ICON_MAP[iconName] || ICON_MAP[currentIcon]}
        alt="weather-icon"
      />
    </WeatherIconContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentSliderTime: selectCurrentSliderTime,
  timezone: selectTimezone,
  currentIcon: selectCurrentWeatherIcon
})

export default connect(mapStateToProps)(WeatherIcon)
