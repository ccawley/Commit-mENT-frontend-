import React from 'react'
import ReadMore from './ReadMore'
import {Grid, Card, Image, Button} from 'semantic-ui-react'

const CommitCard = ({id, name, message, date, avatar, voteOnCommit, likesCount, userid}) => {
// const CommitCard = ({id, name, message, date, avatar}) => {
  console.log(id)
    return (
      <div className="ui card">
        <div className="content">
        <Image src={avatar} size="mini" circular rounded bodered="true" inline floated="left"/>
        <div className="header">{name}</div>
        <div className="meta" >{date}</div>
        <div className="description">
          “{message}„
        </div>
      </div>
      <div className="extra content">
        <div className="ui right labeled button" role="button" tabIndex="0">
          <button onClick={(e) => voteOnCommit(e, id, userid)}  className="ui icon button" role="button">
        {/* <i aria-hidden="true" className="heart icon"></i>Like</button> */}
        <i aria-hidden="true" className="heart icon"></i>Like</button>
          {/* <a className="ui left pointing basic label">2,048</a> */}
          <a className="ui left pointing basic label">{likesCount}</a>
        </div>
      </div>
      </div>
    )
}

// class CommitCard extends Component {
//   constructor (props) {
//     super(props)
//     // {id, name, message, date, avatar, voteOnCommit, likesCount, userid}
//   }
//
//   render () {
//     return (
//       <div className="ui card">
//         <div className="content">
//         <Image src={avatar} size="mini" circular rounded bodered="true" inline floated="left"/>
//         <div className="header">{name}</div>
//         <div className="meta" >{date}</div>
//         <div className="description">
//           “{message}„
//         </div>
//       </div>
//       <div className="extra content">
//         <div className="ui right labeled button" role="button" tabIndex="0">
//           <button className="ui icon button" role="button">
//         {/* <i aria-hidden="true" className="heart icon"></i>Like</button> */}
//         <i aria-hidden="true" onClick={(e) => voteOnCommit(id, userid)} className="heart icon"></i>Like</button>
//           {/* <a className="ui left pointing basic label">2,048</a> */}
//           <a className="ui left pointing basic label">{likesCount(id)}</a>
//         </div>
//       </div>
//       </div>
//     )
//   }
// }

export default CommitCard
