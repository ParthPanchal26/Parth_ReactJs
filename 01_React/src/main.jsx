import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const customElement = React.createElement(
    'a',
    {
      href: 'https://google.com',
      target: '_blank'
    },
    'google.com'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  customElement
  // <App />
)
