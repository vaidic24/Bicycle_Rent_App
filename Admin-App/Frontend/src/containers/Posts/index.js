// import { Button } from 'bootstrap'
import React, { useEffect } from 'react'
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllposts , postClicked } from '../../actions';
import Layout from '../../components/Layout'  
 
export default function Posts() {
 
  const allThePost = useSelector(state => state.allPost);
 

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getAllposts());
  }, []);

  const renderPost = () => {

    let c = allThePost.allPosts.posts;

    console.log(c.length); // array of elements
  }

  

  return (
    
    !allThePost.allPosts.posts ?
      <h1>Add posts</h1>
      :
      (
        
        <div>
      <Layout>
        <Container>

          <Row style={{ marginTop: '80px' }}>

            <Col md={{ span: 6, offset: 3 }}>

              {/* {renderPost()} */}

              {allThePost.allPosts.posts.map((post) => (
                    
                    <Card style={{ width: '35rem', margin: '10px' }}>
                    <Card.Body>
                      <Card.Title> {post.title} </Card.Title>
                      <Card.Text>
                        {post.message} 
                      </Card.Text>
                      <Button onClick={(e) => {
                          e.preventDefault();
                          const infro = {
                            postId : post._id
                          }
                          dispatch(postClicked(infro));
                      }
                      } variant="primary">Btn</Button>
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
