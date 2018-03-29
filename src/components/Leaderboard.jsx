import React, {Component} from 'react'
import {Grid, Table, Header, Image, Container} from 'semantic-ui-react'
import Leader from './Leader'

const Leaderboard = ({ leaders }) => {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <h2>Leaderboard</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell width={4}>Committer</Table.HeaderCell>
                  <Table.HeaderCell width={10}>Message</Table.HeaderCell>
                  <Table.HeaderCell width={2}>Likes</Table.HeaderCell>
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
