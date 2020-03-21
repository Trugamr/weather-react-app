import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { DetailedInfoContainer } from './detailed-info.styles'

import DetailedInfoCard from '../detailed-info-card/detailed-info-card.component'

import {
  selectCurrentWeather,
  selectUnits
} from '../../redux/weather/weather.selectors'
import { DetailedInfoCardSubTitle } from '../detailed-info-card/detailed-info-card.styles'

const DetailedInfo = ({
  units,
  currentWeather = {
    precipProbability: '',
    windSpeed: '',
    humidity: '',
    visibility: '',
    uvIndex: '',
    pressure: ''
  }
}) => {
  const {
    precipProbability,
    windSpeed,
    humidity,
    visibility,
    uvIndex,
    pressure
  } = currentWeather

  return currentWeather ? (
    <DetailedInfoContainer>
      <DetailedInfoCard
        title={`${precipProbability * 100}%`}
        subtitle="Chance of rain"
      />
      <DetailedInfoCard
        title={`${windSpeed} ${units === 'si' ? 'mps' : 'mph'}`}
        subtitle="Wind"
      />
      <DetailedInfoCard title={`${humidity * 100}%`} subtitle="Humidity" />
      <DetailedInfoCard
        title={`${Number.parseFloat(visibility).toFixed(2)} ${
          units === 'si' ? 'km' : visibility > 1 ? 'miles' : 'mile'
        }`}
        subtitle="Visibility"
      />
      <DetailedInfoCard title={uvIndex} subtitle="UV Index" />
      <DetailedInfoCard
        title={`${pressure} ${units === 'si' ? 'hPa' : 'mb'}`}
        subtitle="Pressure"
      />
    </DetailedInfoContainer>
  ) : (
    ''
  )
}

const mapStateToProps = createStructuredSelector({
  currentWeather: selectCurrentWeather,
  units: selectUnits
})

export default connect(mapStateToProps)(DetailedInfo)
