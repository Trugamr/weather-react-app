import { combineReducers } from 'redux'

import weatherReducer from './weather/weather.reducer'
import themeReducer from './theme/theme.reducer'

const rootReducer = combineReducers({
  weather: weatherReducer,
  theme: themeReducer
})

export default rootReducer
