import WeatherActionTypes from './weather.types'

const INITIAL_STATE = {
  currentWeather: {},
  error: null
}

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherActionTypes.GET_WEATHER_SUCCESS:
      return {
        ...state,
        currentWeather: action.payload,
        error: null
      }
    case WeatherActionTypes.GET_WEATHER_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default weatherReducer
