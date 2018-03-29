import React from 'react'
import { Image } from 'semantic-ui-react'
import NavBar from './NavBar'
import MessageBoard from './MessageBoard'
import Leaderboard from './Leaderboard'

const Home = ({logout, profile, status, toggleModal, open, url, leaders}) => {
  return (
    <div>
      <NavBar logout={ logout } profile={ profile } status={ status } onChange={ toggleModal } open={ open } />
      <Leaderboard leaders={ leaders } />
      <div className="ui hidden divider"></div>
      <MessageBoard url={ url } />
      <div className="ui hidden divider"></div>
    </div>
  )
}

export default Home
