import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

// ---- LIST OF COMPONENTS ----
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import Home from './components/Home'


import './App.css'
import axios from 'axios'

//not deployed
const baseURL = 'http://localhost:3000/'

//deployed
// const baseURL = 'https://commit-m.herokuapp.com/'

const dummyData = [
   {
       "user_id": 1,
       "message": "data returned from BFA now only consists of user specific commits.",
       "createdAt": "2018-03-25T04:55:16Z",
       "sha": "964e2b97c559186ab87c1e5226bb641d214f3a5d",
       "user_name": "just-hey",
       "full_name": "Justin",
       "avatar_image": "https://avatars2.githubusercontent.com/u/20526266?v=4",
       "count": 2
   },
   {
       "user_id": 1,
       "message": "first commit",
       "createdAt": "2017-12-16T04:11:24Z",
       "sha": "addac7be8cf89d60bec174f991b873985b6ad087",
       "user_name": "just-hey",
       "full_name": "Justin",
       "avatar_image": "https://avatars2.githubusercontent.com/u/20526266?v=4",
       "count": 2
   },
   {
       "user_id": 1,
       "message": "adding more logic/building functions",
       "createdAt": "2017-10-30T04:06:27Z",
       "sha": "5927ccd577313aeae147ccd716637fb1dc4aaa4d",
       "user_name": "just-hey",
       "full_name": "Justin",
       "avatar_image": "https://avatars2.githubusercontent.com/u/20526266?v=4",
       "count": 1
   },
   {
       "user_id": 1,
       "message": "works?",
       "createdAt": "2018-03-27T20:52:18Z",
       "sha": "e0fde5ddda84f6dcfd6bfd0c0bbccc21b5612d47",
       "user_name": "just-hey",
       "full_name": "Justin",
       "avatar_image": "https://avatars2.githubusercontent.com/u/20526266?v=4",
       "count": 1
   },
   {
       "user_id": 1,
       "message": "modal works as per boss man's request",
       "createdAt": "2018-03-27T01:22:20Z",
       "sha": "500d760cd0ac8c97c40b0c1e8c83a396590e9f40",
       "user_name": "just-hey",
       "full_name": "Justin",
       "avatar_image": "https://avatars2.githubusercontent.com/u/20526266?v=4",
       "count": 1
   }
]

class App extends Component {

  // swap before pushing!
  state = { isLoggedIn: true, isOpen: false, leaders: dummyData, profile: {
    "id": 1,
    "user_name": "ccawley",
    "full_name": "Curtis Cawley",
    "avatar_image": "https://avatars2.githubusercontent.com/u/25617861?v=4",
    "created_at": "2018-03-30T16:06:39.032Z",
    "updated_at": "2018-03-30T16:06:39.032Z"
} }
  // state = { isLoggedIn: false, profile: null, isOpen: false, leaders: null }

  componentDidMount() {
    if (window.location.search)  this.handleTokenExchange(window.location.search)
    this.requestUserCommits()
  }

  // componentDidUpdate() {
  // }

  handleTokenExchange = (tokenStr) => {
    // this.localStorage.setItem({ 'token': 'eef0cadcf685d2a6507a9c7cc46da26ac73a2ea2'})
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
      this.requestUserProfile()
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

      this.requestLeaderCommits()
        .then(result => {
          console.log('setting?!');
          console.log(result);
          this.setState({
            leaders: result
          })
        })
        .catch(console.error)
    }
  }

  requestUserCommits = () => {
    let body = {token: localStorage.getItem('token')}
    return axios.post(`${baseURL}commits`, body)
      .then(result => result.data)
      .catch(err => console.log(err))
  }

  requestLeaderCommits = () => {
    let body = {token: localStorage.getItem('token')}
    return axios.get(`${baseURL}likes/lead`, body)
      .then(result => result.data)
      .catch(err => console.log(err))
  }

  requestUserProfile = () => {
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
          {this.state.isLoggedIn ? (<Home logout={ this.logout } profile={ this.state.profile } status={ this.state.isLoggedIn } toggleModal={ this.toggleModal } open={ this.state.isOpen } url={ baseURL } leaders={ this.state.leaders } />) : (<LoginForm onClick={ this.auth } />)}
          <Footer />
      </div>
    )
  }
}

export default App
