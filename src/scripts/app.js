import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'

import App from './App.Component'

window.addEventListener('load', () => {

  ReactDOM.render(<App />, document.getElementById('app'))

})
