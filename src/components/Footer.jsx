import React, { Component } from 'react'
import { Container, Menu, Responsive } from 'semantic-ui-react'

const Footer = () => {
  return (
    <div className='footer' textAlign='center'>
      <Menu fixed='bottom' inverted>
        <Responsive {...Responsive.onlyComputer}>
          <p>commit-m ~ 2018</p>
        </Responsive>
      </Menu>
      <Menu fixed='bottom' inverted>
        <Responsive {...Responsive.onlyTablet}>
          <p>commit-m ~ 2018</p>
        </Responsive>
      </Menu>
      <Menu fixed='bottom' inverted>
        <Responsive {...Responsive.onlyMobile}>
          <p>commit-m ~ 2018</p>
        </Responsive>
      </Menu>
    </div>
  )

}

export default Footer
