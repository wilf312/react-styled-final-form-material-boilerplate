import React from 'react'
import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TopPage from 'page/TopPage'

class App extends React.Component {
  render () {
    return <MuiThemeProvider><TopPage /></MuiThemeProvider>
  }
}

render(<App />, document.getElementById('app'))
