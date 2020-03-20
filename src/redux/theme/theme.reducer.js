import themes from './themes.data'

import ThemeActionTypes from './theme.types'

const INITIAL_STATE = {
  currentTheme: themes['clear-day']
}

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeActionTypes.SET_CURRENT_THEME:
      return {
        ...state,
        currentTheme: themes[action.payload] || themes['clear-day']
      }
    default:
      return state
  }
}

export default themeReducer
