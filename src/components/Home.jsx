import React from 'react'
import { Image, Container, Responsive, Grid } from 'semantic-ui-react'
import NavBar from './NavBar'
import MessageBoard from './MessageBoard'
import Leaderboard from './Leaderboard'

const Home = ({logout, profile, status, toggleModal, open, url, leaders}) => {
  return (
    <div>
      <NavBar logout={ logout } profile={ profile } status={ status } onChange={ toggleModal } open={ open } />
      <Responsive {...Responsive.onlyComputer}>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column id='leftHalfHome' width={10}>
              <Leaderboard leaders={ leaders } />
            </Grid.Column>
            <Grid.Column id='rightHalfHome' width={6}>
              <MessageBoard url={ url } />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </div>
  )
}

export default Home
