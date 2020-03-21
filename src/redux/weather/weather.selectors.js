import { createSelector } from 'reselect'

const selectWeather = state => state.weather

export const selectCurrentWeather = createSelector(
  [selectWeather],
  weather => weather.currently
)

export const selectWeatherError = createSelector(
  [selectWeather],
  weather => weather.error
)

export const selectPlaceName = createSelector(
  [selectWeather],
  weather => weather.placeName
)

export const selectForecast = createSelector(
  [selectWeather],
  weather => weather.forecast
)
