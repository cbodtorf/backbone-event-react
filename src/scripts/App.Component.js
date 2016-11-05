import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'

import Dog from './Dog.Component'
import Bell from './Bell.Component'

const App = React.createClass({
  getInitialState() {
    const DogModel = Backbone.Model.extend({})
    const BellModel = Backbone.Model.extend({})


    let George = new DogModel({
      name: 'George',
      salivating: false,
      imageSrc: './images/dog_image.png'
    })

    let Bell = new BellModel({
      ringing: false,
      imageSrc: './images/bell-icon.png'
      })

    let initialState = {
      dog: George,
      bell: Bell
    }

    return initialState
  },

  componentWillMount(){
    console.log('comp mount')
    Backbone.Events.on('ringing', () => {
      console.log('event heard!')
      let bell = document.querySelector('.bell')
      let tongue = document.querySelector('.tongue')


      let newState = this.state
      newState.dog.set('salivating', !newState.dog.get('salivating'))
      newState.bell.set('ringing', !newState.bell.get('ringing'))

      this.setState(newState)
      if(newState.bell.get('ringing')) {
        bell.classList.add('ringing')
        tongue.style.display = 'block'
      } else {
        bell.classList.remove('ringing')
        tongue.style.display = 'none'
      }


    }).bind(this)
  },

  _ringBell(){
    console.log('click ring');
    Backbone.Events.trigger('ringing')
  },


  render() {

    return(
      <div className="container">
        <Dog info={ this.state.dog } />
        <Bell info={ this.state.bell } onRing={this._ringBell}/>
      </div>
    )
  }
})

module.exports = App
