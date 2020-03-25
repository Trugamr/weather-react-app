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
  error: undefined,
  currentSliderTime: 0
}

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherActionTypes.GET_WEATHER_SUCCESS:
      console.log(state)
      return {
        ...state,
        ...action.payload,
        currentSliderTime: action.payload.currently.time,
        // creating this so state can be restored to current weather when slider comes back to start
        currentlyBak: action.payload.currently,
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
    case WeatherActionTypes.SET_CURRENT_SLIDER_TIME:
      return {
        ...state,
        currentSliderTime: action.payload
      }
    case WeatherActionTypes.SET_CURRENT_WEATHER:
      return {
        ...state,
        currently: {
          ...state.currently,
          ...action.payload
        }
      }
    default:
      return state
  }
}

export default weatherReducer
