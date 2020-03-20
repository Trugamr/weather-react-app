import WeatherActionTypes from './weather.types'

export const getWeatherStart = query => ({
  type: WeatherActionTypes.GET_WEATHER_START,
  payload: query
})

export const getWeatherSuccess = data => ({
  type: WeatherActionTypes.GET_WEATHER_SUCCESS,
  payload: data
})

export const getWeatherFailure = error => ({
  type: WeatherActionTypes.GET_WEATHER_FAILURE,
  payload: error
})
