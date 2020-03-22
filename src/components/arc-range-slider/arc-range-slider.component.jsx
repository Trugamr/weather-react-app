import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Draggable from 'gsap/Draggable'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import { gsap, TweenMax, TimelineMax, Linear } from 'gsap'

import { ArcRangeSliderContainer } from './arc-range-slider.styles'
import WeatherIcon from '../weather-icon/weather-icon.component'

import {
  selectCurrentWeather,
  selectDailyWeather
} from '../../redux/weather/weather.selectors'
import { updateWeatherRangeProgress } from '../../redux/weather/weather.actions'

class ArcRange extends React.Component {
  windowScrollListener = null
  windowResizeListener = null

  initRange = () => {
    const { currentWeather, dailyWeather } = this.props

    const newLowerBound =
      (currentWeather.time - dailyWeather[0].time) /
      (dailyWeather[2].time - dailyWeather[0].time)

    const { updateWeatherRangeProgress } = this.props
    const bounds = { minX: 41.55 + newLowerBound * 331.5, maxX: 373.45 }
    const seekTo = bounds.minX / 415.5

    console.log('RENDER')

    const weatherIcon = document.getElementById('range-weather-icon')
    weatherIcon.style.position = 'fixed'
    weatherIcon.style.pointerEvents = 'none'

    TweenMax.set('svg', { overflow: 'visible' })

    gsap.registerPlugin(Draggable)
    gsap.registerPlugin(MotionPathPlugin)

    var tl = new TimelineMax({ paused: true })
      .from('#range-path', 1, { ease: Linear.easeNone })
      .to(
        '#range-knob',
        1,
        {
          motionPath: {
            type: 'quadratic',
            path: '#range-path'
          },
          ease: Linear.easeNone
        },
        0
      )
      .seek(seekTo)
    Draggable.create('#range-knob', {
      trigger: '#range-knob',
      type: 'x',
      throwProps: true,
      bounds,
      onDrag: Update,
      onThrowUpdate: Update
    })

    function Update() {
      const progress = Math.abs(this.x / 415.5)
      tl.progress(progress)
      updateWeatherIconPosition(progress)

      const scale = 415.5 - bounds.minX - (415.5 - bounds.maxX)

      updateWeatherRangeProgress(
        Math.round(((this.x - bounds.minX) / scale + Number.EPSILON) * 100) /
          100
      )
    }

    function updateWeatherIconPosition() {
      const knob = document.getElementById('range-knob').getBoundingClientRect()
      weatherIcon.style.left = `${knob.x}px`
      weatherIcon.style.top = `${knob.y}px`
    }
  }

  componentDidMount() {
    this.initRange()

    this.windowResizeListener = window.addEventListener(
      'resize',
      this.updateWeatherIconSize
    )
    this.windowScrollListener = window.addEventListener(
      'scroll',
      this.updateWeatherIconPosition
    )

    this.updateWeatherIconSize()
  }

  componentDidUpdate() {
    this.initRange()
    this.updateWeatherIconPosition()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowResizeListener)
    window.removeEventListener('scroll', this.windowScrollListener)
  }

  updateWeatherIconSize = () => {
    this.updateWeatherIconPosition()
    const knob = document.getElementById('range-knob').getBoundingClientRect()
    const weatherIcon = document.getElementById('range-weather-icon')
    weatherIcon.style.width = `${knob.width}px`
    weatherIcon.style.height = `${knob.height}px`
  }

  updateWeatherIconPosition = () => {
    const knob = document.getElementById('range-knob').getBoundingClientRect()
    const weatherIcon = document.getElementById('range-weather-icon')
    weatherIcon.style.left = `${knob.x}px`
    weatherIcon.style.top = `${knob.y}px`
  }

  render() {
    const { currentWeather } = this.props

    return (
      <>
        <svg
          id="range-arc"
          viewBox="0 0 414.5 30"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path id="range-path" d="M0 31a727 727 0 01414 0" fill="none" />

          {/* update radius of knob to update size of icon as it dependent on it  */}
          <circle id="range-knob" r="25" fill="transparent" />
        </svg>

        <WeatherIcon
          iconName={currentWeather ? currentWeather.icon : 'clear-day'}
          id="range-weather-icon"
        />
      </>
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

const ArcRangeSlider = ({
  currentWeather,
  dailyWeather,
  updateWeatherRangeProgress,
  ...otherProps
}) => {
  return (
    <ArcRangeSliderContainer>
      <ArcSVG />
      <ArcRange
        {...otherProps}
        dailyWeather={dailyWeather}
        currentWeather={currentWeather}
        updateWeatherRangeProgress={updateWeatherRangeProgress}
      />
    </ArcRangeSliderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentWeather: selectCurrentWeather,
  dailyWeather: selectDailyWeather
})

const mapDispatchToProps = dispatch => ({
  updateWeatherRangeProgress: progress =>
    dispatch(updateWeatherRangeProgress(progress))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArcRangeSlider)
