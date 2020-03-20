import ThemeActionTypes from './theme.types'

export const setCurrentTheme = theme => ({
  type: ThemeActionTypes.SET_CURRENT_THEME,
  payload: theme
})
