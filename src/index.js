import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App'

const store = createStore(reducer, {
  currentRegion: 'EMEA',
  modal: {
    isOpen: false,
    data: {}
  },
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
      },
      {
        id: 3,
        label: 'IT',
        isChecked: false
      },
      {
        id: 4,
        label: 'gaming',
        isChecked: false
      },
      {
        id: 5,
        label: 'retail',
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
          login: 'https://monitor.zende.sk/accounts/478062/agents',
          docs: 'https://help.skycab.me/hc/en-gb/articles/115005060005',
          tags: []
        },
        {
          id: 2,
          name: 'Skycab HR',
          color: '#30AABC',
          url: 'https://skycabhr.zendesk.com',
          description: 'An internal instance demonstrating standard HR queries on topics like benefits, PTO, and complaints.',
          type: 'HR',
          login: 'https://monitor.zende.sk/accounts/873384/agents',
          docs: 'https://skycabhr.zendesk.com/hc/en-us/categories/200798885-Internal',
          tags: []
        },
        {
          id: 3,
          name: 'Skycab IT',
          color: '#ed725e',
          url: 'https://skycabit.zendesk.com',
          description: 'Internal ITSM instance operated by Skycab\'s IT department.',
          type: 'IT',
          login: 'https://skycabit.zendesk.com/agent',
          docs: 'https://drive.google.com/drive/folders/0B0QfIO5ptBCdQ2NPQXlsM2VCVms?usp=sharing',
          tags: ['five most recent',
            'announcements',
            'jira',
            'related ticket',
            'notification app',
            'oomnitza it asset management',
            'conditional fields',
            'proactive tickets',
            'tymeshift',
            'notification app',
            'knowledge capture',
            'interbot',
            'calendar',
            'myndbend process management light',
            'calendar',
            'ticket field manager']
        },
        {
          id: 4,
          name: 'Skygame',
          color: '#fac157',
          url: 'https://skygame.zendesk.com',
          description: 'External B2C use case for the gaming industry spanning examples of video games, betting, mobile apps, and more.',
          type: 'gaming',
          login: 'https://skygame.zendesk.com/agent',
          docs: 'https://skygame.zendesk.com/hc/en-gb/categories/115000811889-Internal-Docs',
          tags: []
        },
        {
          id: 5,
          name: 'Madison Island',
          color: '#7796A8',
          url: 'https://madisonisland.zendesk.com',
          description: 'A fully customized B2C fashion retail environment.',
          type: 'retail',
          login: 'https://madisonisland.zendesk.com/agent',
          docs: 'https://docs.google.com/a/zendesk.com/document/d/17FwL7fPwL4d37i-asi1IZxDQC6r4egZ0EQAp9eMe-mk/edit?usp=sharing',
          tags: []
        }
      ]
    }
  ]
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))

