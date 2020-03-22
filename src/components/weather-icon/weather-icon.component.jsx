import React from 'react'

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

const WeatherIcon = ({ iconName, ...props }) => {
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
      <WeatherIconImage src={ICON_MAP[iconName] || cloudy} alt="weather-icon" />
    </WeatherIconContainer>
  )
}

export default WeatherIcon
