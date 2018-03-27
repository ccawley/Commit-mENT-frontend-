import React, { Component } from 'react'
import { Container, Image, Menu, Dropdown, Button, Header, Modal, Grid  } from 'semantic-ui-react'
import Profile from './Profile'

const NavBar = ({ logout, profile, status, onChange, open }) => {

  let options = [
    { key: 'user', text: 'Account', icon: 'user', onClick: onChange  },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: logout },
  ]

  return (
   <div>
     <Menu inverted>
       <Container>
         <Menu.Item as='a' header>
           Commit-m
         </Menu.Item>
         <Menu.Menu position='right'>
           <Menu.Item>
            <Dropdown
              trigger={
                <span>
                  <Image avatar src={profile.avatar_image} /> {profile.user_name}
                  {/* <Image avatar src='http://via.placeholder.com/350x150' /> User Name */}
                </span>
              }
              options={options}
              pointing='top'
              icon={null}/>

              <Modal open={open} className='modal container' size='small' basic closeIcon onClose={onChange}>
                <Modal.Content image>
                  <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                      <Grid.Column floated='right' width={7}>
                        <Image
                          circular
                          rounded
                          size='medium'
                          src={profile.avatar_image}
                          // src='http://via.placeholder.com/350x350'
                        />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Header as='h3' inverted style={{ fontSize: '2em' }}>{profile.user_name}</Header>
                        {/* <Header as='h3' inverted style={{ fontSize: '2em' }}>User Name</Header> */}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Modal.Content>
              </Modal>

           </Menu.Item>
         </Menu.Menu>
       </Container>
     </Menu>
   </div>
  )

}

export default NavBar
