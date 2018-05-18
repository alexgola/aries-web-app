import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { IntlProvider, addLocaleData } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'
import it from 'react-intl/locale-data/it'

import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configure-store'
import {getParameterByName} from './utils/query-string'

import './index.css'
import 'semantic-ui-css/semantic.min.css';

import App from './App'
import localeData from './assets/locales/data.json'

const defLanguage = 'it';
const store = configureStore({}); 

addLocaleData(...it);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData[defLanguage];

// get root element from the dom
const root = document.getElementById('root');
if (root == null) {
  throw new Error("[index.js] No root element");
}

// render react application in root attribute
ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={language} messages={messages}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </Provider>, root);
registerServiceWorker();