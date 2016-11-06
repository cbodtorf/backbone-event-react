import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'

import Dog from './Dog.Component'
import Bell from './Bell.Component'
import { DogModel, BellModel } from './Models'


const App = React.createClass({
  getInitialState() {
    /**
    * Instantiate Models (see Models.js for details)
    */
    let George = new DogModel()

    let Bell = new BellModel()

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
    Backbone.Events.on('ringing', (optionalData) => {
      console.log('event heard!')
      console.log('Optional: ', optionalData);

      /**
      * IMPORTANT, reassign this.state (so we are directly modifying state)
      * then toggle the state using the '!' aka bang operator
      */
      let freshBellMod = new BellModel()
      let freshDoglMod = new DogModel()

      freshDoglMod.set('salivating', !this.state.dog.get('salivating'))
      freshBellMod.set('ringing', !this.state.bell.get('ringing'))

      /**
      * use React's setState() function an
      * @param (object): new state
      */
      this.setState({
        dog: freshDoglMod,
        bell: freshBellMod
      })

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

    let optionalData = 'this is not imporant'

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
