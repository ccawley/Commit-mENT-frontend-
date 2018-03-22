import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import axios from 'axios'

const baseURL = 'http://localhost:3000/'

import './App.css'

class App extends Component {

  componentDidMount() {
    console.log(window.location.search)
    this.handleTokenExchange(window.location.search)
  }

  handleTokenExchange = (tokenStr) => {
    //no tokenStr? stahp!
    if (!tokenStr) return null
    //yes tokenStr? sally forth!
    axios.post(`${baseURL}auth${tokenStr}`)
      .then(data => {
        //what our BE returns should be.... an obj of { access_token, scope }
        localStorage.setItem('token', data.access_token)
      })
  }

  auth = () => {
    let nonce = this.makeNonce()
    localStorage.setItem('State', nonce)
    let clientID = 'cd8ff7558bb5bb6a0d6a'
    let reqParams = `client_id=${clientID}&redirect_uri=http://commit-m.surge.sh/&scope=read:user%20repo&state=${nonce}&allow_signup=true`

    window.location.replace(`https://github.com/login/oauth/authorize?${reqParams}`)
  }

  makeNonce = () => {
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    }

    let randomUP = () => getRandom(65, 91)
    let randomLOW = () => getRandom(97, 123)
    let randomNUM = () => getRandom(48, 58)

    let arr = [randomLOW, randomUP, randomNUM]

    let randomARR = []

    while (randomARR.length < 16) {
      let randomChar = String.fromCharCode(arr[Math.floor(Math.random() * 3)]())
      randomARR.push(randomChar)
    }

    return randomARR.join('')
  }

  render() {
    return (
      <div className="App container">
        <div>
          <NavBar />
        </div>
        <div id="test">
          <LoginForm onClick={ this.auth } />
        </div>
      </div>
    )
  }
}

export default App
