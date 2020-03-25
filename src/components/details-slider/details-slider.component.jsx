import React, { useState } from 'react'

import {
  CustomSlider,
  SliderOverlay,
  SliderContainer
} from './details-slider.styles'

import WeatherSummary from '../../components/weather-summary/weather-summary.component'
import WeatherCardsList from '../../components/weather-cards-list/weather-cards-list.component'
import DetailedInfo from '../../components/detailed-info/detailed-info.component'

const DetailsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  let staticActiveIndex = 1

  const handleNext = () => {
    setActiveIndex(staticActiveIndex > 2 ? 0 : staticActiveIndex + 1)
    console.log(staticActiveIndex)
  }

  return (
    <SliderContainer>
      <CustomSlider
        activeIndex={activeIndex}
        onSlideChange={index => (staticActiveIndex = index)}
        auto={6000}
      >
        <WeatherSummary />
        <WeatherCardsList />
        <DetailedInfo />
      </CustomSlider>

      <SliderOverlay onClick={handleNext} />
    </SliderContainer>
  )
}

export default DetailsSlider
