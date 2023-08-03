// import { Button } from 'bootstrap'
import React, { useEffect } from 'react' 
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../actions';
import Layout from '../../components/Layout' 

import axios from "../../helpers/axios"; 

export default function Users() {
 
  const allTheUser = useSelector(state => state.allUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  // const renderUsers = () => {

  //   let c = allTheUser.allUsers.users;

  //   console.log(c.length); // array of elements
  // }

  const deleteUser = async (userInfro) => {

    const res = await axios.post('/deleteUser' , {
      ...userInfro
    });
    
        
        if (res.status === 200) {
            console.log("User Deleted !!");
        } 
        else {
          console.log("Falied to Delete User. Try again later !!");
        }
  }

  return (
    
    !allTheUser.allUsers.users ?
      <Layout>
        <h1>No Users Yet !!</h1>
      </Layout>

      :
      (
        
        <div>
      <Layout>
        
        <Container>

          <Row style={{ marginTop: '80px' }}>

            <Col md={{ span: 6, offset: 3 }}>

              {/* {renderPost()} */}

              <h1> Users List </h1>
              <br />
 
              {allTheUser.allUsers.users.map((user) => (
                    
                    <Card style={{ width: '35rem', margin: '10px' }}>
                    <Card.Body>
                      <Card.Title> Id : {user._id} </Card.Title>
                      
                      <Card.Text> 
                        firstName : {user.firstName}
                      </Card.Text>

                      <Card.Text> 
                        lastName : {user.lastName}
                      </Card.Text>

                      <Card.Text>
                        email : {user.email}
                      </Card.Text>


                      <Button onClick={(e) => {
                          
                          e.preventDefault();

                          const userInfro = {
                            userId : user._id
                          }

                          // dispatch(bicycleRequested(bicycleInfro));

                          deleteUser( userInfro );

                      }}
                       variant="primary">Delete User</Button>
                    </Card.Body>
                    
                  </Card>
                ))}
              
              <br />
              <br />
              
              {/* <h1>Dummy Bicycle</h1>
              <Card style={{ width: '35rem', margin: '10px' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card> */}

{/* 
              <Card style={{ width: '35rem', margin: '10px' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card> */}


            </Col>
          </Row>

        </Container>
      </Layout>

    </div>
      )
  )
}
