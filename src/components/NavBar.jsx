import React, { Component } from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
          activeItem: null
        }
  }

  handleItemClick = (e, { name }) => {
     this.setState({ activeItem: name })
   }

  render () {
    const { activeItem } = this.state

    return (
     <div>
       <Menu fixed='top' inverted>
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
             <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
           </Menu.Menu>

         </Container>
       </Menu>
     </div>
    )
  }
}

export default NavBar
