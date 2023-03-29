  import React, { useContext } from 'react'
  import { useState } from 'react'
  import { useEffect } from 'react'
  import { useParams } from 'react-router-dom'
  import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Input, Row, Table } from 'reactstrap'
  import ViewUserProfile from '../../Components/ViewUserProfile'
  import userContext from '../../context/userContext'
  import { loadUser } from '../../services/user-service'


  function ProfileInfo() {
    const object = useContext(userContext)
    const [user, setUser] = useState(null)
    const [updateFlag, setUpdateFlag] = useState(false)
    const { userId } = useParams()
    // console.log(userId);


    useEffect(() => {
      loadUser(userId).then(data => {
        console.log(data);
        setUser({ ...data })
      })
    }, [])

    const toggleUpdateFlag = (value) => {
      setUpdateFlag(value)
    }

    //show update profile
    const showUpdateProfile = () => {
      toggleUpdateFlag(true)
    }

    //show view profile
    const viewUpdateProflie = () => {
      toggleUpdateFlag(false)
    }


    /*  view user profile */
    const userView = () => {
      return (

        <ViewUserProfile updateProfileClick={showUpdateProfile} user={user} />

      )
    }

    const viewUserProfile = () => {
      return (

        <div>
          {user ? userView() : 'Loading user Data...'}
        </div>

      )
    }
    
    
    // END view user Profile

    //upate profile
    const updateUserProfile = () => {
      return (
        <div className='mt-5'>
          <Card className='mt-2 border-0 rounded-0 shadow-sm'>
            <CardHeader>
              <h3 className='text-uppercase text-center'>user Information</h3>
              <Container className='text-center'>
                <img style={{ maxWidth: '150px', maxHeight: '150px' }} src={user.image ? user.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU'} />
              </Container>
            </CardHeader>
            <CardBody>
              <Table responsive striped hover bordered={true} className='text-center mt-5'>
                <tbody>
                  <tr>
                    <td >
                      Patient ID
                    </td>
                    <td>
                      {user.id}
                    </td>
                  </tr>
                  <tr>
                    <td >
                      Patient NAME
                    </td>
                    <td>
                      <Input type='text' value={user.name} />
                    </td>
                  </tr>
                  <tr>
                    <td >
                      Patient EMAIL
                    </td>
                    <td>
                      {user.email}
                    </td>
                  </tr>
                  <tr>
                    <td >
                      Contact
                    </td>
                    <td>
                      <Input type='text' value={user.contact} />
                    </td>

                  </tr>
                  <tr>
                    <td >
                      Weight
                    </td>
                    <td>
                      <Input type='text' value={user.weight} />
                    </td>
                  </tr>
                  <tr>
                    <td >
                      Height
                    </td>
                    <td>
                      <Input type='text' value={user.height} />
                    </td>
                  </tr>

                  <tr>
                    <td >
                      Address
                    </td>
                    <td>
                      <Input type='text' value={user.address} />
                    </td>
                  </tr>
                
                </tbody>
              </Table>



            </CardBody>
            <CardFooter className='text-center'>
              <Button color='success'>Update Profile</Button>
            </CardFooter>
          </Card>
        </div>
      )
    }

    //END update profile

    return (
        <Row>
          <Col md={{ size: 6, offset: 3 }}>

            <Container>
              {updateFlag ? updateUserProfile() : viewUserProfile()}
            </Container>
          </Col>
        </Row>
    )
  }

  

  export default ProfileInfo