import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/input'
import { isUserLoggedIn, login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom'; 


export default function Signin() {
 
    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');


    const auth = useSelector(state => state.auth);


    const dispatch = useDispatch();

    

    // useEffect( () => {
        
    //     if (!auth.authenticate) {
    //         dispatch(isUserLoggedIn())
    //     }

    // } , [] );
    
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    const userLogin = (e) => { // e --> event 

        e.preventDefault();
 
        const user = {
            // email : 'ayu@mail.com',
            // password : '1234'
            email,
            password
        }

        dispatch(login(user));

        setEmail('');
        setPassword('');

        navigateHome();
    }

    // OLD 
    // if (auth.authenticate) {
    //     // return < Redirect to={'/'} />
    // }

    return (
        <div>

            <Layout>
                {/* <h1>Signup</h1> */}
                <Container >
                    <Row style={{ marginTop: '80px' }}>

                        <Col md={{ span: 6, offset: 3 }}>
                            {/* <Form  onClick={userLogin} > */}
                            
                            {
                                !auth.authenticate ? 
                            
                            <Form  >
                                <Input
                                    label="Email"
                                    placeholder="Email"
                                    value={email}
                                    type="email"
                                    onChange={ (e) => setEmail(e.target.value) }
                                />

                                <Input
                                    label="Password"
                                    placeholder="Password"
                                    value={password}
                                    type="password"
                                    onChange={ (e) => setPassword(e.target.value) }
                                />


                                <Button onClick={userLogin} variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                            : 
                            
                            <h1>
                                 You are already logged in !! 
                            </h1>

                            }
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}
