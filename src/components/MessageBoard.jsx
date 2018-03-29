import React, {Component} from 'react'
import CommitCard from './CommitCard'
import axios from 'axios'
import {Button} from 'semantic-ui-react'

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
      }],
      limit: 10
    }
  }

  componentDidMount() {
    this.getCommits()
  }

  getCommits = () => {
    let query = `?limit=${this.state.limit}&offset=0`
    axios.get(`${this.props.url}commits${query}`)
      .then((response) => {
        this.setState({ cards: response.data})
      })
      .catch(console.error)
  }

  loadMore = () => {
    this.setState({limit: this.state.limit + 10})
    this.getCommits()
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
          this.state.cards.map((card) => {
            return <CommitCard
              key={card.id}
              id={card.id}
              name={card.full_name}
              message={card.message}
              date={this.dateConversion(card.created_on)}
              avatar={card.avatar_image}
            />
          })
        }
        <button className="ui mini basic button" role="button" onClick={this.loadMore}>Load more</button>
      </div>
    )
  }
}

export default MessageBoard
