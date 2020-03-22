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

export const selectUnits = createSelector(
  [selectWeather],
  // on weather request object not local
  weather => weather.flags.units
)

export const selectLastSearch = createSelector(
  [selectWeather],
  weather => weather.search
)

export const selectCurrentSummary = createSelector(
  [selectCurrentWeather],
  currentWeather =>
    currentWeather ? currentWeather.summary : 'Summary not available.'
)

export const selectDailyWeather = createSelector([selectWeather], weather =>
  weather.daily ? weather.daily.data : null
)

export const selectHourlyWeather = createSelector([selectWeather], weather =>
  weather.hourly ? weather.hourly.data : null
)

export const selectTimezone = createSelector(
  [selectWeather],
  weather => weather.timezone
)
