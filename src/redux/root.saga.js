import { all, call } from 'redux-saga/effects'

import weatherSagas from './weather/weather.sagas'
import themeSagas from './theme/theme.sagas'

export default function* rootSaga() {
  yield all([call(weatherSagas), call(themeSagas)])
}
