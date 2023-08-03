// // import { Button } from 'bootstrap'
// import React, { useEffect } from 'react' 
// import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllBicycles , bicycleRequested } from '../../actions';
// import Layout from '../../components/Layout' 

// export default function Bicycles() {
 
//   const allTheBicycle = useSelector(state => state.allBicycle);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllBicycles());
//   }, []);

//   const renderBicycle = () => {

//     let c = allTheBicycle.allBicycles.bicycles;

//     console.log(c.length); // array of elements
//   }


//   return (
    
//     !allTheBicycle.allBicycles.bicycles ?
//       <Layout>
//         <h1>Add Bicycles !!</h1>
//       </Layout>

//       :
//       (
        
//         <div>
//       <Layout>
//         <Container>

//           <Row style={{ marginTop: '80px' }}>

//             <Col md={{ span: 6, offset: 3 }}>

//               <h1> Bicycles Available : </h1>

//               {/* {renderPost()} */}

//               {allTheBicycle.allBicycles.bicycles.map((bicycle) => (
                    
//                     <Card style={{ width: '35rem', margin: '10px' }}>
//                     <Card.Body>
//                       <Card.Title> Bicycle Id : {bicycle._id} </Card.Title>

//                       <Card.Text>
//                         Bicycle Name : {bicycle.name}
//                       </Card.Text>

//                       <Card.Text>
//                         Bicycle Description : {bicycle.description}
//                       </Card.Text>

//                       <Card.Text>
//                         Bicycle Price Per Hour : {bicycle.pricePerHour}
//                       </Card.Text>

//                       <Button onClick={(e) => {
                        
//                           e.preventDefault();

//                           const bicycleInfro = {
//                             bicycleId : bicycle._id
//                           }

//                           dispatch(bicycleRequested(bicycleInfro));

//                       }}
//                        variant="primary">Rent this</Button>
//                     </Card.Body>
//                   </Card>
//                 ))}

//               {/* <h1>GAP</h1>
//               <Card style={{ width: '35rem', margin: '10px' }}>
//                 <Card.Body>
//                   <Card.Title>Card Title</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make up the bulk of
//                     the card's content.
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>


//               <Card style={{ width: '35rem', margin: '10px' }}>
//                 <Card.Body>
//                   <Card.Title>Card Title</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make up the bulk of
//                     the card's content.
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card> */}


//             </Col>
//           </Row>

//         </Container>
//       </Layout>

//     </div>
//       )
//   )
// }


// import { Button } from 'bootstrap'
import React, { useEffect } from 'react'
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBicycles, bicycleRequested } from '../../actions';
import Layout from '../../components/Layout'

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


  return (

    !allTheBicycle.allBicycles.bicycles ?
      <Layout>
        <h2>Sorry! No Bicycles Available.</h2>
      </Layout>

      :
      (

        <div>
          <Layout>
            <Container>

              <Row style={{ marginTop: '80px' }}>

                <h1> Bicycles Available : </h1>

                {/* {renderPost()} */}

                {allTheBicycle.allBicycles.bicycles.map((bicycle) => (

                  <Col
                    xs={12} md={4} lg={4}>

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

                        <Button onClick={(e) => {

                          e.preventDefault();

                          const bicycleInfro = {
                            bicycleId: bicycle._id
                          }

                          dispatch(bicycleRequested(bicycleInfro));

                        }}
                          variant="outline-success">Rent this</Button>
                      </Card.Body>
                    </Card>
                  </Col>
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


              </Row>

            </Container>
          </Layout>

        </div>
      )
  )
}
