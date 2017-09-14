import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App'

const store = createStore(reducer, {
  currentRegion: 'EMEA',
  filters: {
    isOpen: false,
    isActive: false,
    searchInput: '',
    options: [
      {
        id: 1,
        label: 'technology',
        isChecked: false
      },
      {
        id: 2,
        label: 'HR',
        isChecked: false
      }
    ]
  },
  demos: [
    {
      id: 1,
      region: 'EMEA',
      isOpen: false,
      cards: [
        {
          id: 1,
          name: 'Skycab',
          color: '#03363d',
          url: 'https://skycab.zendesk.com',
          description: 'A B2C technology instance based on a ride sharing company.',
          type: 'technology',
          login: 'https://skycab.zendesk.com/agent',
          docs: 'https://help.skycab.me/hc/en-gb/articles/115005060005'
        },
        {
          id: 2,
          name: 'Skycab HR',
          color: '#30AABC',
          url: 'https://skycabhr.zendesk.com',
          description: 'An internal instance demonstrating standard HR queries on topics like benefits, PTO, and complaints.',
          type: 'HR',
          login: 'https://skycabhr.zendesk.com/agent',
          docs: 'https://skycabhr.zendesk.com/hc/en-us/categories/200798885-Internal'
        }
      ]
    }
  ]
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))

