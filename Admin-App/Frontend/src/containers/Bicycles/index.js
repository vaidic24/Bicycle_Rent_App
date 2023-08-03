// import { Button } from 'bootstrap'
import React, { useEffect } from 'react' 
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBicycles , bicycleRequested } from '../../actions';
import Layout from '../../components/Layout' 

import axios from "../../helpers/axios"; 

export default function Bicycles() {
 
  const allTheBicycle = useSelector(state => state.allBicycle);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBicycles());
  }, []);

  const renderBicycle = () => {

    let c = allTheBicycle.allBicycles.bicycles;

    console.log(c.length); // array of elements
  }

  const deleteBicycle = async (bicycleInfro) => {

    const res = await axios.post('/deleteBicycle' , {
      ...bicycleInfro
    });
    
        
        if (res.status === 200) {
            console.log("Bicycle Deleted !!");
        } 
        else {
          console.log("Falied to Delete Bicycle. Try again later !!");
        }
  }

  return (
    
    !allTheBicycle.allBicycles.bicycles ?
      <Layout>
        <h1>No Bicycles Added Yet !!</h1>
      </Layout>

      :
      (
        
        <div>
      <Layout>
        
        <Container>

          <Row style={{ marginTop: '80px' }}>

            <Col md={{ span: 6, offset: 3 }}>

              {/* {renderPost()} */}

              <h1> Bicyles List </h1>
              <br />

              {allTheBicycle.allBicycles.bicycles.map((bicycle) => (
                    
                    <Card style={{ width: '35rem', margin: '10px' }}>
                    <Card.Body>
                      <Card.Title> Id : {bicycle._id} </Card.Title>
                      
                      <Card.Text> 
                        Name : {bicycle.name}
                      </Card.Text>

                      <Card.Text>
                        Description : {bicycle.description}
                      </Card.Text>

                      <Card.Text>
                      pricePerHour : {bicycle.pricePerHour}
                      </Card.Text>

                      
                      <Card.Text>
                        Creator : {bicycle.creator}
                      </Card.Text>

                      <Card.Text>
                        Availability : {bicycle.isAvailable ? <span>Available</span> : <span>Not Available</span>}
                      </Card.Text>

                      {/* Also correct  */}
{/* 
                      <Card.Text>
                        Availability : {bicycle.isAvailable ? "Available" : "Not Available"}
                      </Card.Text> */}

                      <Card.Text>
                        { bicycle.isTaken ? "Taken by : " + bicycle.takenBy : ''  }
                      </Card.Text>
                      
                      <Card.Text>
                        { bicycle.isTaken ? "Taken at : " + bicycle.takenAt.toString() : ''  }
                      </Card.Text>
                      

                      <Card.Text>
                        { bicycle.isAvailable ?  bicycle.isRequested ? `Is Bicycle Requested : Requested` : `Is Bicycle Requested : Not Requested` : ''}      
                      </Card.Text>

                      <Card.Text>
                        { bicycle.isAvailable ?  bicycle.isRequested ? 'User Requesting : ' + bicycle.requestedBy : '' : ''}      
                      </Card.Text>



                      <Button onClick={(e) => {
                          
                          e.preventDefault();

                          const bicycleInfro = {
                            bicycleId : bicycle._id
                          }

                          // dispatch(bicycleRequested(bicycleInfro));

                          deleteBicycle( bicycleInfro );

                      }}
                       variant="primary">Delete Bicycle</Button>
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
