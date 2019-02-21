import React from 'react'
import {render} from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import TopPage from 'page/TopPage'

class App extends React.Component {
  render () {
    return <MuiThemeProvider theme={createMuiTheme()}>
      <TopPage />
    </MuiThemeProvider>
  }
}

render(<App />, document.getElementById('app'))
