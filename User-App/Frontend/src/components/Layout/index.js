import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Header'

export default function Layout(props) {
    return (
        <>
            <Header />
            {/* Container */}
            {/* {props.children} */}
            {/* this is recieved from Home !! */}
            {/*   <h1>Welcome to Admin Dashboard</h1>   */}
            {/* Container */}

            {props.children}
        
        </>

    )
}
