import React, {Component} from 'react'
import CommitCard from './CommitCard'
import axios from 'axios'

// CHANGE ME BACK PLZ THANKS!!!------------------------------------------
const dummyData = [
    [
        {
            "id": 22,
            "user_id": 1,
            "message": "data returned from BFA now only consists of user specific commits.",
            "createdAt": "2018-03-25T04:55:16Z",
            "sha": "964e2b97c559186ab87c1e5226bb641d214f3a5d",
            "created_at": "2018-03-28T23:59:01.480Z",
            "updated_at": "2018-03-28T23:59:01.480Z"
        }
    ],
    [
        {
            "id": 1,
            "user_id": 1,
            "message": "first commit",
            "createdAt": "2017-12-16T04:11:24Z",
            "sha": "addac7be8cf89d60bec174f991b873985b6ad087",
            "created_at": "2018-03-28T23:59:01.398Z",
            "updated_at": "2018-03-28T23:59:01.398Z"
        }
    ],
    [
        {
            "id": 2,
            "user_id": 1,
            "message": "adding more logic/building functions",
            "createdAt": "2017-10-30T04:06:27Z",
            "sha": "5927ccd577313aeae147ccd716637fb1dc4aaa4d",
            "created_at": "2018-03-28T23:59:01.408Z",
            "updated_at": "2018-03-28T23:59:01.408Z"
        }
    ],
    [
        {
            "id": 12,
            "user_id": 1,
            "message": "works?",
            "createdAt": "2018-03-27T20:52:18Z",
            "sha": "e0fde5ddda84f6dcfd6bfd0c0bbccc21b5612d47",
            "created_at": "2018-03-28T23:59:01.453Z",
            "updated_at": "2018-03-28T23:59:01.453Z"
        }
    ],
    [
        {
            "id": 32,
            "user_id": 1,
            "message": "modal works as per boss man's request",
            "createdAt": "2018-03-27T01:22:20Z",
            "sha": "500d760cd0ac8c97c40b0c1e8c83a396590e9f40",
            "created_at": "2018-03-28T23:59:01.492Z",
            "updated_at": "2018-03-28T23:59:01.492Z"
        }
    ]
]

class MessageBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [{
        id: null,
        full_name: null,
        user_name: null,
        created_on: null,
        message: null,
        avatar_image: null
      }]
    }
  }

  componentDidMount() {
    this.getCommits()
  }

    // CHANGE ME BACK PLZ THANKS!!!------------------------------------------
  getCommits = () => {
    // axios.get(`${this.props.url}commits`)
    //   .then((response) => {
    //     this.setState({ cards: response.data})
    //   })
    //   .catch(console.error)
    this.setState({ cards: dummyData })
  }

  dateConversion = (dateStr) => {
    let date = new Date(dateStr)
    let toMilSec = date.valueOf()
    let oneDay = 86400000
    let oneWeek = 7
    let oneMonth = 30
    let oneYear = 365
    let now = Date.now()
    let diff = Math.floor((now - toMilSec) / oneDay)
    if (diff < oneWeek) {
      if (diff === 0) return 'Today'
      if (diff === 1) return 'Yesterday'
      else return `${diff} days ago`
    }
    if (diff < oneMonth) {
      if ((7 <= diff) && (diff < 14)) return `1 week ago`
      else return `${Math.floor(diff/oneWeek)} weeks ago`
    }
    if (diff < oneYear) {
      if ((oneMonth <= diff) && (diff < (oneMonth*2))) return `1 month ago`
      else return `${Math.floor(diff/oneMonth)} months ago`
    }
    else {
      if ((oneYear <= diff) && (diff < (oneYear*2))) return `1 year ago`
      else return `${Math.floor(diff/oneYear)} years ago`
    }
  }

  render() {
    return (
      <div className="ui container">
        {
          this.state.cards.map((card, i) => {
            return <CommitCard
              key={i}
              id={card.id}
              name={card.full_name}
              message={card.message}
              date={this.dateConversion(card.created_on)}
              avatar={card.avatar_image}
            />
          })
        }
      </div>
    )
  }
}

export default MessageBoard
