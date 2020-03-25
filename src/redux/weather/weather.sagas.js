import {
  takeLatest,
  put,
  call,
  all,
  select,
  throttle
} from 'redux-saga/effects'

import WeatherActionTypes from './weather.types'
import {
  getWeatherSuccess,
  getWeatherFailure,
  getWeatherStart,
  setCurrentSliderTime,
  setCurrentWeather
} from './weather.actions'

import {
  selectUnits,
  selectLastSearch,
  selectCurrentWeather,
  selectCurrentWeatherBak,
  selectDailyWeather,
  selectHourlyWeather
} from './weather.selectors'

import { setCurrentTheme } from '../theme/theme.actions'

const findClosestHourlyWeather = (time, hourlyWeather) => {
  const closest = hourlyWeather.reduce((a, b) => {
    return Math.abs(b.time - time) < Math.abs(a.time - time) ? b : a
  })

  return closest
}

function* getWeather({ payload }) {
  const BASE_URL = `https://tru-weather-api.herokuapp.com`
  const units = yield select(selectUnits)
  try {
    const res = yield fetch(
      `${BASE_URL}/weather?search=${payload}&units=${units}`
    )
    const data = yield res.json()

    if (data.error) {
      yield put(getWeatherFailure({ message: data.error }))
      return
    }

    yield put(getWeatherSuccess(data))
  } catch (error) {
    yield put(getWeatherFailure(error))
  }
}

function* updateWeatherAfterUnitsChange() {
  const lastSearch = yield select(selectLastSearch)
  if (lastSearch) yield put(getWeatherStart(lastSearch))
}

function* updateWeatherOnRange({ payload }) {
  const currentWeather = yield select(selectCurrentWeather)
  const dailyWeather = yield select(selectDailyWeather)
  const timeDiff = dailyWeather[2].time - currentWeather.time

  const time = currentWeather.time + timeDiff * payload
  yield put(setCurrentSliderTime(time))

  const hourlyWeather = yield select(selectHourlyWeather)
  const currentWeatherBak = yield select(selectCurrentWeatherBak)
  // adding current weather backup to hourly weather array
  // so weather can be restored to current when slider comes back to start
  const closestMatch = yield call(findClosestHourlyWeather, time, [
    currentWeatherBak,
    ...hourlyWeather
  ])

  const {
    temperature,
    summary,
    icon,
    humidity,
    precipProbability,
    windSpeed,
    visibility,
    uvIndex,
    pressure
  } = closestMatch

  const valuesToUpdate = {
    temperature,
    summary,
    icon,
    humidity,
    precipProbability,
    windSpeed,
    visibility,
    uvIndex,
    pressure
  }

  yield put(setCurrentWeather(valuesToUpdate))
  yield put(setCurrentTheme(icon))
}

export function* onGetWeather() {
  yield takeLatest(WeatherActionTypes.GET_WEATHER_START, getWeather)
}

export function* onSetWeatherUnits() {
  yield takeLatest(
    WeatherActionTypes.SET_WEATHER_UNITS,
    updateWeatherAfterUnitsChange
  )
}

export function* onUpdateWeatherRangeProgress() {
  yield throttle(
    200,
    WeatherActionTypes.UPDATE_WEATHER_RANGE_PROGRESS,
    updateWeatherOnRange
  )
}

export default function* weatherSagas() {
  yield all([
    call(onGetWeather),
    call(onSetWeatherUnits),
    call(onUpdateWeatherRangeProgress)
  ])
}
