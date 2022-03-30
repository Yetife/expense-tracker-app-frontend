import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from './context/context'
import { ThemeProvider } from '@mui/styles';
import {createTheme} from '@mui/material/styles'
import {SpeechProvider} from '@speechly/react-client'

const theme = createTheme();

ReactDOM.render(
  <SpeechProvider appId="27f84139-e58d-4be2-8aeb-51537ee80333" language="en-US">
      <Provider>
        <ThemeProvider theme={theme} >
            <App />
        </ThemeProvider>
      </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

reportWebVitals();
