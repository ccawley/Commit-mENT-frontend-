import React, {Component} from 'react'
import CommitCard from './CommitCard'
import axios from 'axios'

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

  getCommits = () => {
    axios.get(`${this.props.url}commits`)
      .then((response) => {
        this.setState({ cards: response.data})
      })
      .catch(console.error)
  }

  render() {
    return (
      <div className="ui container">
        {
          this.state.cards.map((card) => {
            let date = new Date(card.created_on)
            return <CommitCard
              key={card.id}
              id={card.id}
              name={card.full_name}
              message={card.message}
              date={date.toDateString()}
              avatar={card.avatar_image}
            />
          })
        }
      </div>
    )
  }
}

export default MessageBoard
