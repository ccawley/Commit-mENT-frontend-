import React from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'

const LoginForm = ({ onClick }) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column id='leftHalfSplash' width={8}>
          <ul>
            <h2>
              <Icon name='idea' size='large'/>
              Encourage commit creativity.
            </h2>
            <h2>
              <Icon name='users' size='large'/>
              See what other people are commiting about.
            </h2>
            <h2>
              <Icon name='star' size='large'/>
              What's the most liked commit?
            </h2>
          </ul>
        </Grid.Column>
        <Grid.Column id='rightHalfSplash' width={8}>
          <ul>
            <h1>
              See what's happening in the world of<br></br>commit messages right now.
            </h1>
            <h2>
              Join Commit-m today!
            </h2>
            <Button size='massive' onClick={ onClick } basic color='black'>Login via GitHub</Button>
          </ul>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default LoginForm
