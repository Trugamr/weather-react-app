import { takeLatest, put, call, all, select } from 'redux-saga/effects'

import WeatherActionTypes from './weather.types'
import {
  getWeatherSuccess,
  getWeatherFailure,
  getWeatherStart,
  setCurrentSliderTime
} from './weather.actions'

import {
  selectUnits,
  selectLastSearch,
  selectCurrentWeather,
  selectDailyWeather,
  selectCurrentSliderTime
} from './weather.selectors'

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
  yield takeLatest(
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
