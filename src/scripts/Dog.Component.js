import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'

const Dog = React.createClass({

  render() {

    return(
      <div className="image-wrapper dog">
        <img src={ this.props.info.get('imageSrc') } alt='dog'/>
        <div className="tongue"></div>
      </div>
    )
  }
})

module.exports = Dog
