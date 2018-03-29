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
                {/* <Table.Row positive>
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
                <Table.Row>
                  <Table.Cell>
                    <Header as='h4' image>
                      <Image avatar src='http://via.placeholder.com/350x350' rounded size='large'/>
                      <Header.Content>
                          Matthew
                        <Header.Subheader>Fabric Design</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    HeyHey
                  </Table.Cell>
                  <Table.Cell>
                      15
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as='h4' image>
                      <Image avatar src='http://via.placeholder.com/350x350' rounded size='large'/>
                      <Header.Content>
                          Lindsay
                        <Header.Subheader>Entertainment</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    HeyHey
                  </Table.Cell>
                  <Table.Cell>
                      12
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as='h4' image>
                      <Image avatar src='http://via.placeholder.com/350x350' rounded size='large'/>
                      <Header.Content>
                          Mark
                        <Header.Subheader>Executive</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    HeyHey
                  </Table.Cell>
                  <Table.Cell>
                      11
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as='h4' image>
                      <Image avatar src='http://via.placeholder.com/350x350' rounded size='large'/>
                      <Header.Content>
                          Mark
                        <Header.Subheader>Executive</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    HeyHey
                  </Table.Cell>
                  <Table.Cell>
                      11
                  </Table.Cell>
                </Table.Row> */}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Leaderboard
