import React from 'react'
import { Image, Label, Item, Grid, Segment, Divider  } from 'semantic-ui-react'

const Profile = ({  }) => {
  return (
    <Grid>
    <Grid.Column width={9}>
      <Image src='http://via.placeholder.com/350x350' size='medium' circular centered />
    </Grid.Column>
    <Grid.Column width={3}>
          <h1>just-hey</h1>
    </Grid.Column>
  </Grid>
  )
}

export default Profile



      // <Item.Group divided>
      //   <Item>
      //     <Item.Image src='/assets/images/wireframe/image.png' />
      //     <Item.Content>
      //       <Item.Header as='a'>Content Header</Item.Header>
      //       <Item.Meta>
      //         <span>Date</span>
      //         <span>Category</span>
      //       </Item.Meta>
      //       <Item.Description>
      //         A description which may flow for several lines and give context to the content.
      //       </Item.Description>
      //       <Item.Extra>
      //         <Image
      //           avatar
      //           circular
      //           src='/assets/images/wireframe/square-image.png'
      //         />
      //         Username
      //       </Item.Extra>
      //     </Item.Content>
      //   </Item>
