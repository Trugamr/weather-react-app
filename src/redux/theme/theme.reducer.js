import { clearDay } from './themes.data'

import ThemeActionTypes from './theme.types'

const INITIAL_STATE = {
  currentTheme: clearDay
}

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeActionTypes.SET_CURRENT_THEME:
      return {
        ...state,
        currentTheme: action.payload
      }
    default:
      return state
  }
}

export default themeReducer
