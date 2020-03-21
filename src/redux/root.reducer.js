import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import weatherReducer from './weather/weather.reducer'
import themeReducer from './theme/theme.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['weather', 'theme']
}

const rootReducer = combineReducers({
  weather: weatherReducer,
  theme: themeReducer
})

export default persistReducer(persistConfig, rootReducer)
