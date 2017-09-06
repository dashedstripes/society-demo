import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App'

const store = createStore(reducer, {
  currentRegion: 'EMEA',
  searchInput: '',
  demos: [
    {
      id: 1,
      region: 'EMEA',
      isOpen: false,
      cards: [
        {
          id: 1,
          name: 'Skycab',
          color: '#03363D',
          url: 'skycab.zendesk.com',
          description: 'A technology instance, based on a ride sharing company.',
          type: 'technology',
          login: '#',
          docs: '#'
        }
      ]
    },
    {
      id: 2,
      region: 'AMER',
      isOpen: false,
      cards: [
        {
          id: 1,
          name: 'Skycab US',
          color: '#FF6D5A',
          url: 'skycab-us.zendesk.com',
          description: 'A technology instance, based on a ride sharing company.',
          type: 'technology',
          login: '#',
          docs: '#'
        },
        {
          id: 1,
          name: 'Skycab US',
          color: '#FF6D5A',
          url: 'skycab-us.zendesk.com',
          description: 'A technology instance, based on a ride sharing company.',
          type: 'technology',
          login: '#',
          docs: '#'
        },
        {
          id: 1,
          name: 'Skycab US',
          color: '#FF6D5A',
          url: 'skycab-us.zendesk.com',
          description: 'A technology instance, based on a ride sharing company.',
          type: 'technology',
          login: '#',
          docs: '#'
        },
        {
          id: 1,
          name: 'Skycab US',
          color: '#FF6D5A',
          url: 'skycab-us.zendesk.com',
          description: 'A technology instance, based on a ride sharing company.',
          type: 'technology',
          login: '#',
          docs: '#'
        },
        {
          id: 1,
          name: 'Skycab US',
          color: '#FF6D5A',
          url: 'skycab-us.zendesk.com',
          description: 'A technology instance, based on a ride sharing company.',
          type: 'technology',
          login: '#',
          docs: '#'
        }

      ]
    },
    {
      id: 3,
      region: 'APAC',
      isOpen: false,
      cards: [
        {
          id: 1,
          name: 'Skycab US',
          color: '#F79A3E',
          url: 'skycab-us.zendesk.com',
          description: 'A technology instance, based on a ride sharing company.',
          type: 'technology',
          login: '#',
          docs: '#'
        }
      ]
    }
  ]
})

store.subscribe(() => {
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
