import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import 'bulma/css/bulma.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './styles/globalStyles.css'

import * as serviceWorker from './utils/serviceWorker'


import Routes from './Routes';

const Root = () => (
    <Provider store={configureStore()}>
      <Routes/>
    </Provider>
    );


render(
   <Root />,
   document.querySelector('#root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
