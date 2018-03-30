import React, { Component } from 'react'
import { Container, Menu, Responsive } from 'semantic-ui-react'

const Footer = () => {
  return (
    <div className='footer' textAlign='center'>
      <Responsive {...Responsive.onlyComputer}>
        <p>Commit-m ~ 2018</p>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <p>Commit-m ~ 2018</p>
      </Responsive>
      <Responsive {...Responsive.onlyMobile}>
        <p>Commit-m ~ 2018</p>
      </Responsive>
    </div>
  )

}

export default Footer
