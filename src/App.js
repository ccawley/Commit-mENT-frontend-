import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

// ---- LIST OF COMPONENTS ----
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import CommitCard from './components/CommitCard'


import './App.css'
import axios from 'axios'

//not deployed
// const baseURL = 'http://localhost:3000/'

//deployed
const baseURL = 'https://commit-m.herokuapp.com/'



class App extends Component {

  // swap before pushing!
  // state = { isLoggedIn: true, isOpen: false }
  state = { isLoggedIn: false, profile: null, isOpen: false }

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
      .catch(err => console.log(err, 'handle token exchange issue'))
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
        .catch(err => console.log(err))

      this.requestUserCommits()
        .then()
        .catch(console.error)

    }
  }

  requestUserCommits = () => {
    let body = {token: localStorage.getItem('token')}
    return axios.post(`${baseURL}commits`, body)
      .then(result => result.data)
      .catch(err => console.log(err))
  }

  getCommits = () => {
    return axios.get(`${baseURL}commits`)
      .then(result => result)
      .catch(console.error)
  }

  getProfile = () => {
    let body = {token: localStorage.getItem('token')}
    return axios.post(`${baseURL}users`, body)
      .then(result => result.data)
      .catch(err => console.log(err))
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
    window.location.replace('/')
  }

  toggleModal = () => {
    if (this.state.isOpen) this.setState({ isOpen: false })
    else this.setState({ isOpen: true })
  }

  render() {
    return (
      <div className="App container">
          {this.state.isLoggedIn ? (<NavBar logout={ this.logout } profile={this.state.profile} status={ this.state.isLoggedIn } onChange={this.toggleModal} open={this.state.isOpen} />) : (<LoginForm id="test" onClick={ this.auth } />)}
      </div>
    )
  }
}

export default App
