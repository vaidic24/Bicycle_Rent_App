// import React from 'react'
// import { Container } from 'react-bootstrap'
// import Layout from '../../components/Layout'

// export default function Home() {
//     return (
//         <div>
//             {/* <h1>Home</h1> */}
//             <Layout>
//                 <Container style={ {margin : '5rem'} } className='text-center'>

//                     <h1>Welcome to Admin Dashboard</h1>
//                     {/* this is seend as props to the Layout  */}
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facilis explicabo voluptatibus aliquam accusantium ut quasi delectus nihil. Ad iste possimus delectus iusto cupiditate pariatur quisquam porro soluta impedit minima!</p>
//                 </Container>
//             </Layout>

//         </div>
//     )
// }

import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../../components/Layout'

export default function Home() {
    return (
        <div className='justify-content-center'>
            {/* <h1>Home</h1> */}
            <Layout>
                <Container style={{
                    flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '70px',
                    textAlign: 'center',
                    backgroundImage: `url("https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmljeWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60")`,
                    height: '100vh',
                    backgroundSize: 'cover',
                }} className='text-center'>

                    <br/><br /><br />

                    <h1>Bicycle Renting for IIITL</h1>
                    <p>
                        This is a website for renting bicycles for IIITL students.
                        <br/>
                        Here you can rent a bicycle for a day or for a week.
                    </p>
                </Container>
            </Layout>

        </div>
    )
}
