import React from 'react'
import { useTheme } from 'styled-components'

import Header from '../../components/header/header.component'
import ArcRangeSlider from '../../components/arc-range-slider/arc-range-slider.component'

import {
  WeatherPageContainer,
  TopContainer,
  MiddleContainer,
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
      <MiddleContainer></MiddleContainer>
      <BottomContainer></BottomContainer>
    </WeatherPageContainer>
  )
}

export default WeatherPage
