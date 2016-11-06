import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'


/**
* Set up Backbone Models
*/

module.exports = {

  DogModel: Backbone.Model.extend({
    defaults: {
      name: 'George',
      salivating: false,
      imageSrc: './images/dog_image.png'
    }
  }),

  BellModel: Backbone.Model.extend({
    defaults: {
      ringing: false,
      imageSrc: './images/bell-icon.png'
      }
  })

}
