import { combineReducers } from 'redux'

import weatherReducer from './weather/weather.reducer'

const rootReducer = combineReducers({
  weather: weatherReducer
})

export default rootReducer
