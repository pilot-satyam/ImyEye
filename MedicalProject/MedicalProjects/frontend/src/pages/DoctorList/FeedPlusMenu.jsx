import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import Base from '../../Components/Base'
import DoctorSideMenu from '../../Components/DoctorSideMenu'
import NewFeed from './NewFeed'

function FeedPlusMenu() {
  return (
    <Base>
    <Container className='mt-5'>
    <Row className='mt-5'>
        <Col md={2} className='pt-3'>
        <DoctorSideMenu />
        </Col>
        <Col md={10}>
        <NewFeed />
        </Col>
    </Row>
    </Container>
    </Base>
  )
}

export default FeedPlusMenu
