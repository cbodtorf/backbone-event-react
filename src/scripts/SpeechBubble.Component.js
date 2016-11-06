import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'

const SpeechBubble = React.createClass({
  getInitialState(){
    let state = {
      text: ''
    }

    return state
  },

  componentWillMount(){
    Backbone.Events.on('speak', (text) => {
      /**
      * This is my scooby doo/Dog Speak function.
      */
      let textArr = text.split(' ')
      let newText = textArr.map((word) => {

        let consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','s','t','v','w','x','y','z']
        let vowels = ['a','e','i','o','u']
        let dogword = ''

        if(consonants.indexOf(word.charAt(0)) !== -1) {
          let sliced = word.slice(1)
          dogword = 'R' + sliced
        } else if (vowels.indexOf(word.charAt(0)) !== 1) {
          dogword = 'R' + word
        } else {
          dogword = word
        }
        return dogword
      }).join(' ')


      /**
      * setting new state
      */
      this.setState({
        text: newText
      })
    }).bind(this)
  },

  render() {

    return(
      <div className="speech-bubble">
        <span>{ this.state.text }</span>
      </div>
    )
  }
})

module.exports = SpeechBubble
