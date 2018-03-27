import React, {Component} from 'react'
import ReadMore from './ReadMore'
import {Grid, Card, Image, Button} from 'semantic-ui-react'

class CommitCard extends Component {
  // let {message, date, likes, avatar} = this.props
  render() {
    return (
      <div className="ui card">
        <div className="content">
        <Image src="https://avatars2.githubusercontent.com/u/26612704?s=400&u=79cecb7e10ea2ce276fc8cc471117971e8637dc7&v=4" size="mini" circular rounded bodered="true" inline floated="left"/>
        <div className="header">Anh Trieu</div>
        <div className="meta" >4 days ago</div>
        <div className="description">
          <ReadMore text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </div>
      </div>
      <div className="extra content">
        <div className="ui right labeled button" role="button" tabIndex="0">
          <button className="ui icon button" role="button">
        <i aria-hidden="true" className="heart icon"></i>Like</button>
          <a className="ui left pointing basic label">2,048</a>
        </div>
      </div>
      </div>
    )
  }
}

export default CommitCard
