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

export const setWeatherUnits = units => ({
  type: WeatherActionTypes.SET_WEATHER_UNITS,
  payload: units
})

export const updateWeatherRangeProgress = progress => ({
  type: WeatherActionTypes.UPDATE_WEATHER_RANGE_PROGRESS,
  payload: progress
})
