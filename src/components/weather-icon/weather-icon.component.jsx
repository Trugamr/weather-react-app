import React from 'react'

import { ReactComponent as ClearDay } from '../../assets/weather-icons/clear-day.svg'
import { ReactComponent as ClearNight } from '../../assets/weather-icons/clear-night.svg'
import { ReactComponent as Cloudy } from '../../assets/weather-icons/cloudy.svg'
import { ReactComponent as Fog } from '../../assets/weather-icons/fog.svg'
import { ReactComponent as PartlyCloudyDay } from '../../assets/weather-icons/partly-cloudy-day.svg'
import { ReactComponent as PartlyCloudyNight } from '../../assets/weather-icons/partly-cloudy-night.svg'
import { ReactComponent as Rain } from '../../assets/weather-icons/rain.svg'
import { ReactComponent as Sleet } from '../../assets/weather-icons/sleet.svg'
import { ReactComponent as Snow } from '../../assets/weather-icons/snow.svg'
import { ReactComponent as Wind } from '../../assets/weather-icons/wind.svg'

import { WeatherIconContainer } from './weather-icon.styles'

const WeatherIcon = ({ iconName }) => {
  const ICON_MAP = {
    'clear-day': <ClearDay />,
    'clear-night': <ClearNight />,
    rain: <Rain />,
    sleet: <Sleet />,
    wind: <Wind />,
    fog: <Fog />,
    snow: <Snow />,
    cloudy: <Cloudy />,
    'partly-cloudy-day': <PartlyCloudyDay />,
    'partly-cloudy-night': <PartlyCloudyNight />
  }

  return (
    <WeatherIconContainer>
      {ICON_MAP[iconName] || ICON_MAP['clear-day']}
    </WeatherIconContainer>
  )
}

export default WeatherIcon
