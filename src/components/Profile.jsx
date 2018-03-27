import React from 'react'
import { Button, Header, Image, Modal, Grid } from 'semantic-ui-react'

const Profile = (props) => (
  <Modal className='modal container' size='small' basic closeIcon>
    <Modal.Content image>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column floated='right' width={7}>
            <Image
              circular
              rounded
              size='medium'
              // src={props.profile.avatar_image}
              src='http://via.placeholder.com/350x350'
            />
          </Grid.Column>
          <Grid.Column width={8}>
            {/* <Header as='h3' inverted style={{ fontSize: '2em' }}>{props.profile.user_name}</Header> */}
            <Header as='h3' inverted style={{ fontSize: '2em' }}>User Name</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Modal.Content>
  </Modal>
)

export default Profile
