import React, { Component } from 'react'
import { Container, Image, Menu } from 'semantic-ui-react'

const NavBar = ({ logout, status }) => {

  return (
   <div>
     <Menu inverted>
       <Container>
         <Menu.Item as='a' header>
           <Image
             size='mini'
             // src='/logo.png'
             style={{ marginRight: '1.5em' }}
           />
           Commit-m
         </Menu.Item>
         <Menu.Menu position='right'>
           {status ? ( <Menu.Item name='logout' onClick={ logout } />): ('')}
         </Menu.Menu>

       </Container>
     </Menu>
   </div>
  )

}

export default NavBar
