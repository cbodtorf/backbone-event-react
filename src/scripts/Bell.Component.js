import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'

const Bell = React.createClass({

  /**
  * Bell has an onClick attribute that bubbles it's effect to the Parent Component.
  */
  render() {
    let ringClassName = ''
    if(this.props.info.get('ringing')){
      ringClassName = 'ringing'
    }

    /**
    * in className we are using '{ }' in order to evaluate our javascript string template `${}`
    */
    return(
      <div className={`image-wrapper bell ${ringClassName}`}>
        <img src={ this.props.info.get('imageSrc') } alt="bell" onClick={ this.props.onRing }/>
        <span>Click to ring</span>
      </div>
    )
  }
})

module.exports = Bell
