import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'

const DogSpeakInput = React.createClass({

  /**
  * Speak triggers the backbone event in SpeechBubble
  * --- *
  * Backbone.Event.Trigger
  * @param (string) bacbone event name
  * @param (optional) we are sending it the input value
  */
  _speak(){
    let text = this.refs.speakInput.value
    Backbone.Events.trigger('speak', text)
    this.refs.speakInput.value = ''
  },

  render() {

    return(
      <div className="dog-speak">
        <input ref="speakInput" type="text" placeholder={`What should ${ this.props.name } say`}/>
        <button className="btn" onClick={this._speak}>Speak</button>
      </div>
    )
  }
})

module.exports = DogSpeakInput
