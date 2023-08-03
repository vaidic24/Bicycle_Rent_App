import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../../components/Layout'

export default function Home() {
    return (
        <div>
            {/* <h1>Home</h1> */}
            <Layout>
                <Container style={ {margin : '5rem'} } className='text-center'>

                    <h1>Welcome to Admin Dashboard</h1>
                    {/* this is seend as props to the Layout  */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facilis explicabo voluptatibus aliquam accusantium ut quasi delectus nihil. Ad iste possimus delectus iusto cupiditate pariatur quisquam porro soluta impedit minima!</p>
                </Container>
            </Layout>

        </div>
    )
}
