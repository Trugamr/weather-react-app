import React from 'react'
import { ArcRangeSliderContainer } from './arc-range-slider.styles'

import Draggable from 'gsap/Draggable'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import { gsap, TweenMax, TimelineMax, Linear } from 'gsap'

class ArcRange extends React.Component {
  componentDidMount() {
    TweenMax.set('svg', { overflow: 'visible' })
    TweenMax.set('.knob', { x: 0, y: 30 })

    gsap.registerPlugin(Draggable)
    gsap.registerPlugin(MotionPathPlugin)

    var tl = new TimelineMax({ paused: true })
      .from('#path2', 1, { ease: Linear.easeNone })
      .to(
        '.knob',
        1,
        {
          motionPath: {
            type: 'quadratic',
            path: '#path2'
          },
          ease: Linear.easeNone
        },
        0
      )

    Draggable.create('.knob', {
      trigger: '.knob',
      type: 'x',
      throwProps: true,
      bounds: { minX: 0, maxX: 414 },
      onDrag: Update,
      onThrowUpdate: Update
    })

    function Update() {
      tl.progress(Math.abs(this.x / 415.5))
      console.log(this.x)
    }
  }

  render() {
    return (
      <svg
        id="range-arc"
        viewBox="0 0 414.5 30"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id="path2" d="M0 31a727 727 0 01414 0" fill="none" stroke="red" />

        <circle
          className="knob"
          r="10"
          fill="#88CE02"
          strokeWidth="4"
          stroke="#111"
        />
      </svg>
    )
  }
}

const ArcSVG = () => {
  return (
    <svg
      id="main-arc"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 414.5 30"
    >
      <path d="M414 30C354 11 283 0 207 0S61 11 0 30z" />
    </svg>
  )
}

const ArcRangeSlider = () => {
  return (
    <ArcRangeSliderContainer>
      <ArcSVG />
      <ArcRange />
    </ArcRangeSliderContainer>
  )
}

export default ArcRangeSlider
