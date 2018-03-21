import React from 'react'
import { Button } from 'semantic-ui-react'

const LoginForm = ({ onClick }) => {
  return (
    <Button onClick={ onClick } basic color='black'>Login via GitHub</Button>
  )
}

export default LoginForm
