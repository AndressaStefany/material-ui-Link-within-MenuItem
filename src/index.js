import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './App'
import './index.css'

injectTapEventPlugin();

const Root = () => (
    <MuiThemeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </MuiThemeProvider>
);

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
