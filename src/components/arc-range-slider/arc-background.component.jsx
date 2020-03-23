import React from 'react'
import {
  ArcBackgroundContainer,
  ArcSVGContainer,
  ArcBackgroundOverlay
} from './arc-range-slider.styles'

const ArcBackground = () => {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="curveClipPath" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,1
              L 0,0
              L 1,0
              L 1,1
              C .705 -0.315, 0.295 -0.315, 0 1
              Z"
            />
          </clipPath>
        </defs>
      </svg>

      <ArcBackgroundContainer>
        <ArcSVGContainer>
          <svg
            id="main-arc"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 414.5 30"
          >
            <path d="M414 30C354 11 283 0 207 0S61 11 0 30z" fill="none" />
          </svg>
          <ArcBackgroundOverlay />
        </ArcSVGContainer>
      </ArcBackgroundContainer>
    </>
  )
}

export default ArcBackground
