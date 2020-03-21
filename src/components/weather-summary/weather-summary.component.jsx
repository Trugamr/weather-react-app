import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useTheme } from 'styled-components'

import { selectCurrentSummary } from '../../redux/weather/weather.selectors'

import {
  WeatherSummaryContainer,
  SummaryContainer
} from './weather-summary.styles'

const WeatherSummary = ({ summary }) => {
  const theme = useTheme()

  return (
    <WeatherSummaryContainer>
      <SummaryContainer theme={theme}>{summary}</SummaryContainer>
    </WeatherSummaryContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  summary: selectCurrentSummary
})

export default connect(mapStateToProps)(WeatherSummary)
