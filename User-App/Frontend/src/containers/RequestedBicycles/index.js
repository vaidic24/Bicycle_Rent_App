// import { Button } from 'bootstrap'
import React, { useEffect } from 'react' 
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllRequestedBicycles } from '../../actions';
import Layout from '../../components/Layout' 

export default function RequestedBicycles() {
 
  const allTheRequestedBicycle = useSelector(state => state.allRequestedBicycle);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRequestedBicycles());
  }, []);

  const renderRequestedBicycle = () => {

    let c = allTheRequestedBicycle.allRequestedBicycles.requestedBicycles;

    console.log(c.length); // array of elements
  }


  return (
    
    !allTheRequestedBicycle.allRequestedBicycles.requestedBicycles ?
      <Layout>
        <h1> No Request Bicycles Yet !!</h1>
      </Layout>

      :
      (
        
        <div>
      <Layout>
        <Container>

          <Row style={{ marginTop: '80px' }}>

            <Col md={{ span: 6, offset: 3 }}>

              <h1> Bicycles Requested : </h1>

              {/* {renderPost()} */}

              {allTheRequestedBicycle.allRequestedBicycles.requestedBicycles.map((bicycle) => (
                    
                    <Card style={{ width: '35rem', margin: '10px' }}>
                    <Card.Body>
                      <Card.Title> Bicycle Id : {bicycle._id} </Card.Title>

                      <Card.Text>
                        Bicycle Name : {bicycle.name}
                      </Card.Text>

                      <Card.Text>
                        Bicycle Description : {bicycle.description}
                      </Card.Text>

                      <Card.Text>
                        Bicycle Price Per Hour : {bicycle.pricePerHour}
                      </Card.Text>

                      {/* <Button onClick={(e) => {
                        
                          e.preventDefault();

                          const bicycleInfro = {
                            bicycleId : bicycle._id
                          }

                          dispatch(bicycleRequested(bicycleInfro));

                      }}
                       variant="primary">Rent this</Button> */}
                       
                    </Card.Body>
                  </Card>
                ))}

              {/* <h1>GAP</h1>
              <Card style={{ width: '35rem', margin: '10px' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>


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
