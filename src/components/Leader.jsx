import React, {Component} from 'react'
import {Grid, Table, Header, Image, Container} from 'semantic-ui-react'

const Leader = ({  }) => {
  return (
    <Table.Row positive>
      <Table.Cell>
        <Header as='h4' image>
          <Image avatar src='http://via.placeholder.com/350x350' rounded size='large'/>
          <Header.Content>
              Lena
            <Header.Subheader>Human Resources</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>
        HeyHeykjasl;dfjasl;kjfd;lkajdlkfjaldjs;aslkdjflksjfkljslkdfjalsdjfksjldfjlskjdflksjld aksjdnflkajdlkfja;lkdsjfl ;ajdskl;fjal;djf;lakjdfklaj;ldfjl;ajdkfl;ajkl;dj
      </Table.Cell>
      <Table.Cell>
          22
      </Table.Cell>
    </Table.Row>
  )
}

export default Leader
