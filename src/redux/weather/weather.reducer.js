import WeatherActionTypes from './weather.types'

const INITIAL_STATE = {
  longitute: undefined,
  latitude: undefined,
  placeName: undefined,
  forecast: undefined,
  timezone: undefined,
  currently: undefined,
  hourly: undefined,
  daily: undefined,
  flags: { units: 'si' },
  offset: undefined,
  search: undefined,
  error: undefined
}

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherActionTypes.GET_WEATHER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: undefined
      }
    case WeatherActionTypes.GET_WEATHER_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case WeatherActionTypes.SET_WEATHER_UNITS:
      return {
        ...state,
        flags: { units: action.payload }
      }
    default:
      return state
  }
}

export default weatherReducer
