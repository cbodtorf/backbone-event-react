import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'

import DogSpeakInput from './DogSpeakInput.Component'
import SpeechBubble from './SpeechBubble.Component'

const Dog = React.createClass({

  render() {
    /**
    * we are using props to determine whether the tongue is displaying or not.
    */

    let stylObj = {}

    if(this.props.info.get('salivating')){
      stylObj = {display: 'block'}
    } else {
      stylObj = {display: 'none'}
    }

    return(
      <div className="image-wrapper dog">
        <SpeechBubble />
        <img src={ this.props.info.get('imageSrc') } alt='dog'/>
        <div className="tongue" style={ stylObj }></div>
        <DogSpeakInput name={this.props.info.get('name')} />
      </div>
    )
  }
})

module.exports = Dog
