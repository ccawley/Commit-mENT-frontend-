import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

// ---- LIST OF COMPONENTS ----
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import Profile from './components/Profile'


import './App.css'
import axios from 'axios'

//not deployed
const baseURL = 'http://localhost:3000/'

//deployed
// const baseURL = 'https://commit-m.herokuapp.com/'



class App extends Component {

  // swap before pushing!
  // state = { isLoggedIn: true }
  state = { isLoggedIn: false }

  componentDidMount() {
    if (window.location.search)  this.handleTokenExchange(window.location.search)
  }

  // componentDidUpdate() {
  // }

  handleTokenExchange = (tokenStr) => {
    if (!tokenStr) return null
    axios.post(`${baseURL}auth${tokenStr}`)
      .then(data => {
        localStorage.setItem('token', data.data.access_token)
        this.checkForToken()
      })
  }

  checkForToken = async () => {
    if (localStorage.getItem('token')) {
      this.getProfile()
        .then(result => {
          this.setState({
            isLoggedIn: true,
            profile: result
            })
        })

    }
  }

  getProfile = () => {
    let body = {token: localStorage.getItem('token')}
    return axios.post(`${baseURL}users`, body)
      .then(result => result.data)
      .catch()
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

  logout = () => {
    localStorage.removeItem('token')
    this.setState({ isLoggedIn: false})
  }

  render() {
    return (
      <div className="App container">
          <NavBar logout={ this.logout } status={ this.state.isLoggedIn } />
        <div  id="test">
          {this.state.isLoggedIn ? (<Profile profile={this.state.profile} />): (<LoginForm onClick={ this.auth } />)}
        </div>
      </div>
    )
  }
}

export default App
