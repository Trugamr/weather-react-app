import { all, call } from 'redux-saga/effects'

import weatherSagas from './weather/weather.sagas'

export default function* rootSaga() {
  yield all([call(weatherSagas)])
}
