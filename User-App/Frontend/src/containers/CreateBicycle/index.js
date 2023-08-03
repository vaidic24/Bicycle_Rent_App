// import React, { useEffect, useState } from 'react'
// import Layout from '../../components/Layout'
// import { Container, Form, Button, Row, Col } from 'react-bootstrap'
// import Input from '../../components/UI/input'
// import { isUserLoggedIn, login , createBicycleNowAction } from '../../actions';
// import { useDispatch, useSelector } from 'react-redux';
// // import { Redirect } from 'react-router-dom';

// export default function CreateBicycle() {

//     // const [title, setTitle] = useState('');
//     // const [message, setMessage] = useState(''); 
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState(''); 
//     const [pricePerHour , setpricePerHour] = useState(''); 

//     const auth = useSelector(state => state.auth);

//     const dispatch = useDispatch();

//     const createBicycleNow = (e) => { // e --> event 

//         e.preventDefault();
 
//         const bicycle = {
//             // email : 'ayu@mail.com',
//             // password : '1234'
//             // title,
//             // message
//             name,
//             description,
//             pricePerHour
//         }

//         dispatch(createBicycleNowAction(bicycle));

//         setName('');
//         setDescription('');
//         setpricePerHour('');
        
//     }

    

//     return (
//         <div>
//             <Layout>
//                 {/* <h1>Signup</h1> */}
//                 <Container >
//                     <Row style={{ marginTop: '80px' }}>

//                         <Col md={{ span: 6, offset: 3 }}>
//                             <h3> Add a New Bicycle </h3>
//                             <Form>
//                                 <Input
//                                     label="Name"
//                                     placeholder="Enter Name"
//                                     value={name}
//                                     type="text"
//                                     onChange={(e) => setName(e.target.value)}
//                                 />

//                                 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                                     <Form.Label> Description </Form.Label>
//                                     <Form.Control as="textarea" rows={3}

//                                         placeholder="Enter Description"
//                                         value={description}
//                                         onChange={(e) => setDescription(e.target.value)}

//                                     />
//                                 </Form.Group>
                            
//                                 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                                     <Form.Label> Price Per Hour in Rupee </Form.Label>
//                                     <Form.Control as="textarea" rows={3}

//                                         placeholder="Enter Price Per Hour"
//                                         value={pricePerHour}
//                                         onChange={(e) => setpricePerHour(e.target.value)}

//                                     />
//                                 </Form.Group>

 

//                                 <Button onClick={ createBicycleNow } variant="primary" type="submit">
//                                     Submit
//                                 </Button>

//                             </Form>


//                         </Col>
//                     </Row>
//                 </Container>
//             </Layout>
//         </div>
//     )
// }

import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/input'
import { isUserLoggedIn, login , createBicycleNowAction } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';

export default function CreateBicycle() {

    // const [title, setTitle] = useState('');
    // const [message, setMessage] = useState(''); 
    const [name, setName] = useState('');
    const [description, setDescription] = useState(''); 
    const [pricePerHour , setpricePerHour] = useState(''); 

    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const createBicycleNow = (e) => { // e --> event 

        e.preventDefault();
 
        const bicycle = {
            // email : 'ayu@mail.com',
            // password : '1234'
            // title,
            // message
            name,
            description,
            pricePerHour
        }

        dispatch(createBicycleNowAction(bicycle));

        setName('');
        setDescription('');
        setpricePerHour('');
        
    }

    

    return (
        <div>
            <Layout>
                {/* <h1>Signup</h1> */}
                <Container >
                    <Row style={{ marginTop: '80px' }}>

                        <Col md={{ span: 6, offset: 3 }}>
                            <h3> Add a New Bicycle </h3>
                            <Form>
                                <Input
                                    label="Name"
                                    placeholder="Enter Name"
                                    value={name}
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                />

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label> Description </Form.Label>
                                    <Form.Control as="textarea" rows={3}

                                        placeholder="Enter Description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}

                                    />
                                </Form.Group>
                            
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label> Price Per Hour in Rupee </Form.Label>
                                    <Form.Control as="textarea" rows={3}

                                        placeholder="Enter Price Per Hour"
                                        value={pricePerHour}
                                        onChange={(e) => setpricePerHour(e.target.value)}

                                    />
                                </Form.Group>

 

                                <Button onClick={ createBicycleNow } variant="primary" type="submit">
                                    Submit
                                </Button>

                            </Form>


                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}
