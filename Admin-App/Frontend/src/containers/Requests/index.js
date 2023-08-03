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
      <Layout>
        <h1>No Requests Yet !!</h1>
      </Layout>

      :
      (
        
        <div>
      <Layout>
        <Container>

          <Row style={{ marginTop: '80px' }}>

            <Col md={{ span: 6, offset: 3 }}>
              <h1>Bicycle Requests </h1>
              <br/>
              {/* {renderPost()} */}

              {allTheRequest.allRequests.requests.map((request) => (
                    
                    <Card style={{ width: '35rem', margin: '10px' }}>
                    <Card.Body>
                      <Card.Title> Request Id : {request._id} </Card.Title>
                      <Card.Text>
                        Person Requesting : {request.userRequested}
                      </Card.Text>

                      <Card.Text>
                        Bicycle Requesting : {request.bicycleRequested}
                      </Card.Text>

                      <Card.Text>
                      Person Id Requesting : {request.requestedBy}
                      </Card.Text>

                      
                      <Card.Text>
                        Bicycle Id Requesting : {request.requestedBicycle}
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
                       
                       variant="primary">Accept Request</Button>

                       <span>  </span>
                       <Button onClick={(e) => {
                          
                          e.preventDefault();

                          const requestIdObj = {
                            requestId : request._id,
                            bicycleId : request.requestedBicycle, 
                            userId : request.requestedBy
                          }

                          dispatch(requestDeclined(requestIdObj));

                      }}
                       
                       variant="primary">Decline Request </Button>

                    </Card.Body>
                  </Card>
                ))}
{/* 
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
 */}

            </Col>
          </Row>

        </Container>
      </Layout>

    </div>
      )
  )
}
