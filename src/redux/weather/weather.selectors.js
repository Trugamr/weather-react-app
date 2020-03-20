import { createSelector } from 'reselect'

const selectWeather = state => state.weather

export const selectCurrentWeather = createSelector(
  [selectWeather],
  weather => weather.currentWeather
)

export const selectWeatherError = createSelector(
  [selectWeather],
  weather => weather.error
)
