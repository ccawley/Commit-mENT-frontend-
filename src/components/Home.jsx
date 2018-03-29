import React from 'react'
import { Image } from 'semantic-ui-react'
import NavBar from './NavBar'
import MessageBoard from './MessageBoard'

const Home = ({logout, profile, status, toggleModal, open, url}) => {
  return (
    <div>
      <NavBar logout={ logout } profile={ profile } status={ status } onChange={ toggleModal } open={ open } />
      <MessageBoard url={ url }/>
    </div>
  )
}

export default Home
