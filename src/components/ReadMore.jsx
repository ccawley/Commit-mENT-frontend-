import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'

class ReadMore extends React.Component {
  constructor(props) {
    super(props)
    this.txt = props.text
  }

  state = {truncated: true}

  changeState = () => {
    this.setState({truncated: !this.state.truncated})
  }

  full = () => {
    return this.txt
  }

  truncated = () => {
    let splitted = this.txt.split('')
    if (splitted.length > 100) {
      return splitted.slice(0, 99).join('')
    }
  }

  moreOrLess = () => {
    return this.state.truncated ? 'show more' : 'show less'
  }

  render() {
    return (
      <div>
        <p>{this.state.truncated ? this.truncated() : this.full()}</p>
        <button className="ui mini basic button" role="button" onClick={this.changeState}>{this.moreOrLess()}</button>
      </div>
    )
  }
}


export default ReadMore
