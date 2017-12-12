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
      },
      {
        id: 6,
        label: 'entertainment',
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
          login: 'https://skycabhr.zendesk.com/agent',
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
    },
    {
      id: 2,
      region: 'AMER',
      isOpen: false,
      cards: [
        {
          id: 1,
          name: 'Entertainment 276 Human Resources',
          color: '#03363d',
          url: 'https://z3n-hrdemo.zendesk.com',
          description: 'The Human Resources department for Entertainment 276.',
          type: 'HR',
          login: 'https://z3n-hrdemo.zendesk.com/agent',
          docs: 'https://drive.google.com/drive/folders/16-6EOEVUoNjlleej-pq2jJwhlUT3IKLT?usp=sharing',
          tags: ['Myndbend', 'Workday Demo', 'Knowledge Capture', 'Ticket Redaction', 'Ticket Sharing']
        },
        {
          id: 2,
          name: 'Entertainment 276 IT',
          color: '#30AABC',
          url: 'https://z3n-itdemo.zendesk.com',
          description: 'The IT department for Entertainment 276.',
          type: 'IT',
          login: 'https://z3n-itdemo.zendesk.com/agent',
          docs: 'https://drive.google.com/drive/folders/1559j_21o1g7lBZ5mcv_NOdgofw-l05pK?usp=sharing',
          tags: ['SFDC', 'Jira', 'Asset Management', 'Knowledge Capture', 'Myndbend', 'Custom App']
        },
        {
          id: 3,
          name: 'Entertainment 276 Customer Support',
          color: '#ed725e',
          url: 'https://z3n-csdemo.zendesk.com',
          description: 'Customer Support for an Entertainment Company.',
          type: 'entertainment',
          login: 'https://z3n-csdemo.zendesk.com/agent',
          docs: 'https://drive.google.com/drive/folders/1ZFdY73h30a52vfavH_HQTEGr3eJmwUS9?usp=sharing',
          tags: ['Purchase History', 'SFDC', 'Knowledge Capture', 'Pathfinder', 'Myndbend']
        },
        {
          id: 4,
          name: 'Entertainment 276 Retail',
          color: '#fac157',
          url: 'https://z3n-retaildemo.zendesk.com',
          description: 'External B2C use case for the gaming industry spanning examples of video games, betting, mobile apps, and more.',
          type: 'retail',
          login: 'https://z3n-retaildemo.zendesk.com/agent',
          docs: 'https://drive.google.com/drive/folders/1YubERiciT-SIN0k1M83rG3GXBuCuqnq-?usp=sharing',
          tags: ['purchase history', 'conditional fields', 'time tracking', 'shopify']
        }
      ]
    }
  ]
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))

