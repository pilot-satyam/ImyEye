import React from 'react'
import { FloatingLabel } from 'react-bootstrap'
import { Button, Container, Form, Input } from 'reactstrap'

const Forgot=()=> {
  return (
  <Container className='text-center'>
    <Input
    bsSize="sm"
    name='email'
    type='email'
    placeholder='enter password reset email'
  />

  {/* In thymeLeaf it will send to the controller with send-otp annotation */}
  {/* form action="" th:action="@{/send-otp}" */}

  <Button className='warning'>Reset</Button>
  </Container>
  )
}

export default Forgot
