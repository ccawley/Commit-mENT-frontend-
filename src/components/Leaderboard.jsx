import React, {Component} from 'react'
import {Grid, Table, Header, Image, Container} from 'semantic-ui-react'
import Leader from './Leader'

const Leaderboard = ({ leaders }) => {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <h1>Leaderboard</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className='leaderboard'>
          <Grid.Column>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell width={2}>Committer</Table.HeaderCell>
                  <Table.HeaderCell width={5}>Message</Table.HeaderCell>
                  <Table.HeaderCell width={1}>Likes</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                { leaders.map((leader, i) => <Leader key={i} leader={leader} />) }
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Leaderboard
