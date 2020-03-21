import React from 'react'
import { useTheme } from 'styled-components'

import Header from '../../components/header/header.component'

import {
  WeatherPageContainer,
  TopContainer,
  MiddleContainer,
  BottomContainer
} from './weather.styles'

const WeatherPage = () => {
  const theme = useTheme()

  return (
    <WeatherPageContainer theme={theme}>
      <TopContainer>
        <Header />
      </TopContainer>
      <MiddleContainer></MiddleContainer>
      <BottomContainer></BottomContainer>
    </WeatherPageContainer>
  )
}

export default WeatherPage
