import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Profile from './components/Profile'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <NavBar />
        <Profile />
      </div>
    )
  }
}

export default App
