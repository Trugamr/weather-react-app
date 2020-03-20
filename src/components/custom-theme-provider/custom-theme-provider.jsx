import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ThemeProvider } from 'styled-components'

import { selectCurrentTheme } from '../../redux/theme/theme.selectors'

const CustomThemeProvider = ({ children, theme, ...props }) => {
  return (
    <ThemeProvider theme={theme} {...props}>
      {children}
    </ThemeProvider>
  )
}

const mapStateToProps = createStructuredSelector({
  theme: selectCurrentTheme
})

export default connect(mapStateToProps)(CustomThemeProvider)
