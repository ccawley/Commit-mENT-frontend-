import React, { Component } from 'react'
import { Container, Image, Menu } from 'semantic-ui-react'
import DropDown from './DropDown'


const NavBar = ({ logout, profile, status, onChange, open }) => {

  return (
   <div>
     <Menu fixed='top' inverted>
       <Container>
         <Menu.Item as='a' header>
           Commit-m
         </Menu.Item>
         <Menu.Menu position='right'>
           <Menu.Item>

             <DropDown logout={logout} profile={profile} status={status} onChange={onChange} open={open}/>

           </Menu.Item>
         </Menu.Menu>
       </Container>
     </Menu>
   </div>
  )

}

export default NavBar
