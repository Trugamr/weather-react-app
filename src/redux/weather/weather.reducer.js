import WeatherActionTypes from './weather.types'

const INITIAL_STATE = {
  longitute: null,
  latitude: null,
  placeName: null,
  forecast: null,
  timezone: null,
  currently: null,
  hourly: null,
  daily: null,
  flags: null,
  offset: null,
  search: null,
  error: null,
  units: 'si'
}

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherActionTypes.GET_WEATHER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: null
      }
    case WeatherActionTypes.GET_WEATHER_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case WeatherActionTypes.SET_WEATHER_UNITS:
      return {
        ...state,
        units: action.payload
      }
    default:
      return state
  }
}

export default weatherReducer
