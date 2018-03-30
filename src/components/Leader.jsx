import React, {Component} from 'react'
import {Grid, Table, Header, Image, Container} from 'semantic-ui-react'

const Leader = ({ leader }) => {
  console.log('dis!',leader);
  return (
    <Table.Row>
      <Table.Cell>
        <Header as='h4' image>
          <Image avatar src={leader.avatar_image} rounded size='large'/>
          <Header.Content>
              {leader.full_name}
            <Header.Subheader>{leader.user_name}</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>
        {leader.message}
      </Table.Cell>
      <Table.Cell>
          {leader.count}
      </Table.Cell>
    </Table.Row>
  )
}

export default Leader
