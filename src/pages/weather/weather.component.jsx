import React from 'react'

import Header from '../../components/header/header.component'
import ArcRangeSlider from '../../components/arc-range-slider/arc-range-slider.component'
import BriefDetails from '../../components/brief-details/brief-details.component'
import DetailsSlider from '../../components/details-slider/details-slider.component'

import {
  WeatherPageContainer,
  TopContainer,
  BriefDetailsContainer,
  BottomContainer,
  ArchContainer
} from './weather.styles'

const WeatherPage = () => {
  return (
    <WeatherPageContainer>
      <TopContainer>
        <Header />
      </TopContainer>
      <ArchContainer>
        <ArcRangeSlider />
      </ArchContainer>
      <BriefDetailsContainer>
        <BriefDetails />
      </BriefDetailsContainer>
      <BottomContainer>
        <DetailsSlider />
      </BottomContainer>
    </WeatherPageContainer>
  )
}

export default WeatherPage
