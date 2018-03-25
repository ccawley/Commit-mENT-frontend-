import React from 'react'
import { Image, Header, Button, Grid } from 'semantic-ui-react'

const Profile = (props) => {
  return (
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column floated='right' width={7}>
            <Image
              circular
              rounded
              size='medium'
              src={props.profile.avatar_image}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>{props.profile.user_name}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button target='_blank' onClick={(e) => {e.preventDefault(); window.open(`https://github.com/${props.profile.user_name}`)}} size='huge'>View GitHub</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  )
}

export default Profile
