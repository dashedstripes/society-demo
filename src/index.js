import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'

const store = createStore(store => store, {
  currentRegion: 'EMEA',
  demos: [
    {
      region: 'EMEA',
      cards: [
        {
          id: 1,
          name: 'Skycab',
          url: 'skycab.zendesk.com',
          description: 'A technology instance, based on a ride sharing company.',
          type: 'technology',
          login: '#',
          docs: '#'
        }
      ]
    }
  ]
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
