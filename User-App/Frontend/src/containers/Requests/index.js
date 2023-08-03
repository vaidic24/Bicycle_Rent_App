// import { Button } from 'bootstrap'
import React, { useEffect } from 'react' 
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllRequests , requestAccepted , requestDeclined} from '../../actions';
import Layout from '../../components/Layout' 
 
export default function AllRequests() {
 
  const allTheRequest = useSelector(state => state.allRequest);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRequests());
  }, []);

  const renderBicycle = () => {

    let c = allTheRequest.allRequests.requests;

    console.log(c.length); // array of elements
  }


  return (

    !allTheRequest.allRequests.requests ?
      <h1>Add Requests !!</h1>
      :
      (
        
        <div>
      <Layout>
        <Container>

          <Row style={{ marginTop: '80px' }}>

            <Col md={{ span: 6, offset: 3 }}>

              {/* {renderPost()} */}

              {allTheRequest.allRequests.requests.map((request) => (
                    
                    <Card style={{ width: '35rem', margin: '10px' }}>
                    <Card.Body>
                      {/* <Card.Title> {request.userRequested} </Card.Title> */}
                      <Card.Text>
                        {request.userRequested}
                      </Card.Text>

                      <Card.Text>
                        {request.bicycleRequested.name}
                      </Card.Text>

                      <Card.Text>
                        {request.requestedBy}
                      </Card.Text>

                      
                      <Card.Text>
                        {request.requestedBicycle}
                      </Card.Text>
                      

                      {/* <Button onClick={(e) => {
                          
                          e.preventDefault();

                          const bicycleInfro = {
                            bicycleId : bicycle._id
                          }

                          dispatch(bicycleRequested(bicycleInfro));

                      }}
                       variant="primary">Btn</Button> */}
                       
                       <Button onClick={(e) => {
                          
                          e.preventDefault();

                          const requestIdObj = {
                            requestId : request._id,
                            bicycleId : request.requestedBicycle, 
                            userId : request.requestedBy
                          }

                          dispatch(requestAccepted(requestIdObj));

                      }}
                       
                       variant="primary">Accept</Button>

                       <Button onClick={(e) => {
                          
                          e.preventDefault();

                          const requestIdObj = {
                            requestId : request._id,
                            bicycleId : request.requestedBicycle, 
                            userId : request.requestedBy
                          }

                          dispatch(requestDeclined(requestIdObj));

                      }}
                       
                       variant="primary">Decline</Button>

                    </Card.Body>
                  </Card>
                ))}

              <h1>GAP</h1>
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
              </Card>


            </Col>
          </Row>

        </Container>
      </Layout>

    </div>
      )
  )
}
