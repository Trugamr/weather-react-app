import { takeLatest, put, all, call } from 'redux-saga/effects'

import WeatherActionTypes from '../weather/weather.types'
import { setCurrentTheme } from '../theme/theme.actions'

function* updateThemeAfterWeatherSuccess({
  payload: {
    currently: { icon }
  }
}) {
  yield put(setCurrentTheme(icon))
}

export function* onGetWeatherSuccess() {
  yield takeLatest(
    WeatherActionTypes.GET_WEATHER_SUCCESS,
    updateThemeAfterWeatherSuccess
  )
}

export default function* themeSagas() {
  yield all([call(onGetWeatherSuccess)])
}
