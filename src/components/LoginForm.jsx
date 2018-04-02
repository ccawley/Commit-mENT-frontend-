import React from 'react'
import { Grid, Button, Icon, Responsive } from 'semantic-ui-react'
import InfoModal from './InfoModal'

const LoginForm = ({ onClick }) => {
  return (
    <div className='login'>
      <Responsive {...Responsive.onlyComputer}>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column id='leftHalfSplash' width={8}>
              <ul>
                <h2>
                  <Icon className='icon' name='idea' size='large'/>
                  Encourage commit creativity.
                </h2>
                <h2>
                  <Icon className='icon' name='users' size='large'/>
                  See what others are commiting about.
                </h2>
                <h2>
                  <Icon className='icon' name='star' size='large'/>
                  What's the most liked commit?
                </h2>
                <h2 id='info'>
                  <InfoModal  />
                </h2>

              </ul>


            </Grid.Column>
            <Grid.Column id='rightHalfSplash' width={8}>
              <ul>
                <h1 className='splashTitle'>Commit-m</h1>
                <h1>
                  See what's happening in the world of<br></br>commit messages right now.
                </h1>
                <h2 id='booty'>
                  Join Commit-m today!
                </h2>
                <Button id='splashButton' size='massive' onClick={ onClick } basic color='black'>Login via GitHub</Button>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>

      <Responsive {...Responsive.onlyTablet}>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column id='leftHalfSplash' width={8}>
              <ul>
                <h3>
                  <Icon className='icon' name='idea' size='large'/>
                  Encourage commit creativity.
                </h3>
                <h3>
                  <Icon className='icon' name='users' size='large'/>
                  See what others are commiting about.
                </h3>
                <h3>
                  <Icon className='icon' name='star' size='large'/>
                  What's the most liked commit?
                </h3>
                <h3  id='info'>
                  <InfoModal />
                </h3>
              </ul>
            </Grid.Column>
            <Grid.Column id='rightHalfSplash' width={8}>
              <ul>
                <h1 className='splashTitle'>Commit-m</h1>
                <h2>
                  See what's happening in the world<br></br>of commit messages right now.
                </h2>
                <h3>
                  Join Commit-m today!
                </h3>
                <Button id='splashButton' size='massive' onClick={ onClick } basic color='black'>Login via GitHub</Button>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>

      <Responsive {...Responsive.onlyMobile}>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column id='topHalfSplashMobile' width={8}>
              <ul>
                <h1 className='splashTitle'>Commit-m</h1>
                <h3>
                  See what's happening in the world<br></br>of commit messages right now.
                </h3>
                <h4>
                  Join Commit-m today!
                </h4>
                <Button id='splashButton' size='massive' onClick={ onClick } basic color='black'>Login via GitHub</Button>
              </ul>
            </Grid.Column>
            <Grid.Column id='bottomHalfSplashMobile' width={8}>
              <ul>
                <h4>
                  <Icon className='icon' name='idea' size='large'/>
                  Encourage commit creativity.
                </h4>
                <h4>
                  <Icon className='icon' name='users' size='large'/>
                  See what others are commiting.
                </h4>
                <h4>
                  <Icon className='icon' name='star' size='large'/>
                  What's the most liked commit?
                </h4>
                <h4 id='info'>
                  <InfoModal />
                </h4>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </div>
  )
}

export default LoginForm
