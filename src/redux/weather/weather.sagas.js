import { takeLatest, put, call, all, select } from 'redux-saga/effects'

import WeatherActionTypes from './weather.types'
import { getWeatherSuccess, getWeatherFailure } from './weather.actions'
import { selectUnits, selectLastSearch } from './weather.selectors'

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
  if (lastSearch) yield call(getWeather, { payload: lastSearch })
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

export default function* weatherSagas() {
  yield all([call(onGetWeather), call(onSetWeatherUnits)])
}
