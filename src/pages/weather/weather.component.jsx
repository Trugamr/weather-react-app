import React from 'react'
import { useTheme } from 'styled-components'

import Header from '../../components/header/header.component'
import ArcRangeSlider from '../../components/arc-range-slider/arc-range-slider.component'
import WeatherSummary from '../../components/weather-summary/weather-summary.component'
import WeatherCardsList from '../../components/weather-cards-list/weather-cards-list.component'
import DetailedInfo from '../../components/detailed-info/detailed-info.component'

import {
  WeatherPageContainer,
  TopContainer,
  BriefDetailsContainer,
  BottomContainer,
  ArchContainer
} from './weather.styles'

const WeatherPage = () => {
  const theme = useTheme()

  return (
    <WeatherPageContainer theme={theme}>
      <TopContainer>
        <Header />
      </TopContainer>
      <ArchContainer>
        <ArcRangeSlider />
      </ArchContainer>
      <BriefDetailsContainer></BriefDetailsContainer>
      <BottomContainer>
        {/* <WeatherSummary /> */}
        {/* <WeatherCardsList /> */}
        <DetailedInfo />
      </BottomContainer>
    </WeatherPageContainer>
  )
}

export default WeatherPage
