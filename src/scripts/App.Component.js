import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'

import Dog from './Dog.Component'
import Bell from './Bell.Component'

const App = React.createClass({
  getInitialState() {
    /**
    * Set up Backbone Models
    */
    const DogModel = Backbone.Model.extend({})
    const BellModel = Backbone.Model.extend({})

    /**
    * Instantiate Models with data
    */
    let George = new DogModel({
      name: 'George',
      salivating: false,
      imageSrc: './images/dog_image.png'
    })

    let Bell = new BellModel({
      ringing: false,
      imageSrc: './images/bell-icon.png'
      })

    /**
    * Set initialState
    */
    let initialState = {
      dog: George,
      bell: Bell
    }

    return initialState
  },


  /**
  * This is critical because it sets Event Listeners when the componenet mounts (and before render)
  */
  componentWillMount(){

    /**
    * Here is our Backbone listener the callback function doesnt run until it is triggered.
    * @param (string): the name of the event
    * @param (callback) a function that will run when triggered
    */
    Backbone.Events.on('ringing', () => {
      console.log('event heard!')
      /**
      * finding DOM nodes
      */
      let bell = document.querySelector('.bell')
      let tongue = document.querySelector('.tongue')

      /**
      * IMPORTANT, reassign this.state (so we are directly modifying state)
      * then toggle the state using the '!' aka bang operator
      */
      let newState = this.state
      newState.dog.set('salivating', !newState.dog.get('salivating'))
      newState.bell.set('ringing', !newState.bell.get('ringing'))

      /**
      * use React's setState() function an
      * @param (object): new state
      */
      this.setState(newState)
      if(newState.bell.get('ringing')) {
        bell.classList.add('ringing')
        tongue.style.display = 'block'
      } else {
        bell.classList.remove('ringing')
        tongue.style.display = 'none'
      }

      /**
      * we are binding 'this' to the Backbone.Events.on() function
      * The alternative would be to: 'let self = this' at the top of the ComponentWillMount() function.
      */
    }).bind(this)
  },

  /**
  * Ring bell method triggers the 'ringing' event
  * trigger takes an optional second argument for passing data if needed
  * --- *
  * optionalData is just in there for show. It does nothing.
  */
  _ringBell(){
    console.log('click ring');
    Backbone.Events.trigger('ringing', optionalData)
  },


  render() {

    /**
    * passing specific state (our models) into <Dog/> and <Bell/> props.info
    * props.onRing takes the action of the onClick attribute of Bell (see Bell.Component)
    */
    return(
      <div className="container">
        <Dog info={ this.state.dog } />
        <Bell info={ this.state.bell } onRing={this._ringBell}/>
      </div>
    )
  }
})

module.exports = App
