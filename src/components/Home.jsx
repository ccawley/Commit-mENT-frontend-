import React from 'react'
import { Image } from 'semantic-ui-react'
import NavBar from './NavBar'
import MessageBoard from './MessageBoard'

const Home = ({logout, profile, status, toggleModal, open, url}) => {
  return (
    <div>
      <NavBar logout={ logout } profile={ profile } status={ status } onChange={ toggleModal } open={ open } />
      <div className="ui hidden divider"></div>
      <MessageBoard url={ url }/>
      <div className="ui hidden divider"></div>
    </div>
  )
}

export default Home
