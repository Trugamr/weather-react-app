import { takeLatest, put, call, all } from 'redux-saga/effects'

import WeatherActionTypes from './weather.types'
import { getWeatherSuccess, getWeatherFailure } from './weather.actions'

function* getWeather({ payload }) {
  const BASE_URL = `https://tru-weather-api.herokuapp.com`
  try {
    const res = yield fetch(`${BASE_URL}/weather?search=${payload}`)
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

export function* onGetWeather() {
  yield takeLatest(WeatherActionTypes.GET_WEATHER_START, getWeather)
}

export default function* weatherSagas() {
  yield all([call(onGetWeather)])
}
