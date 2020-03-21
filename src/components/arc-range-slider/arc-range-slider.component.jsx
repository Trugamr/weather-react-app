import React from 'react'
import { ArcRangeSliderContainer } from './arc-range-slider.styles'

const ArcSVG = () => {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 567.4 61"
    >
      <path d="M567 61C494 23 394 0 284 0S73 23 0 61z" />
    </svg>
  )
}

const ArcRangeSlider = () => {
  return (
    <ArcRangeSliderContainer>
      <ArcSVG />
    </ArcRangeSliderContainer>
  )
}

export default ArcRangeSlider
