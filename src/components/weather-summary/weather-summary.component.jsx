import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentSummary } from '../../redux/weather/weather.selectors'

import {
  WeatherSummaryContainer,
  SummaryContainer
} from './weather-summary.styles'

const WeatherSummary = ({ summary }) => {
  return (
    <WeatherSummaryContainer>
      <SummaryContainer>{summary}</SummaryContainer>
    </WeatherSummaryContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  summary: selectCurrentSummary
})

export default connect(mapStateToProps)(WeatherSummary)
