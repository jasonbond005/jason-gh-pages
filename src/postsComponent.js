import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import imageFile from './images/unsplash.jpg';
import { Link } from 'react-router-dom';
import api from './api';
import swal from 'sweetalert';
import { ThemeContext } from '.';
import {React, useContext} from 'react';

const PostComponent = ({posts}) => {
  // const history= useHistory();
  const [theme, toggleTheme] = useContext(ThemeContext);
  const loggedin= localStorage.getItem('token');
  const author= localStorage.getItem('username');
  const refreshPage =() => {
    window.location.reload(false);
   }
  
  const deletePost = async (id, author) =>{
    
    const data={
      author
    }
    try {
        await api.delete(`/delete-blog/${id}`, { data : data}).then(
          res => {
            if(res.data.status === 200){
              swal("Created Successfully ", res.data.message, "success");
              refreshPage();
            }
            else if(res.data.status === 403)
            {
              swal("Abeg Abeg Abeg", res.data.message, "warning");
            }
          }
        )
       
    } catch (err) {
      console.log(err.message)
    }
    
  }
  return (
          <Row>
            {/* <h2>{name}</h2> */}
             
                          {
              posts.map(
                (post) => (

                  <Col  xs={12} md={4} lg={3} key={post.id}>
                    <Card border="info" style={{ background: theme.background, color: theme.foreground, width: '18rem', margin: '10px' }}>
                      <Card.Img variant="top" src={imageFile} />
                      <Card.ImgOverlay>
                        <Card.Title style={{ color: theme.foreground }}>{post.title}</Card.Title>
                        <small style={{ color: theme.foreground }}>Written by {post.author}</small>
                        <Card.Text  style={{ color: theme.foreground }}>
                          {post.body.substring(0,50)}...
                        </Card.Text>
                        < Link to={`/posts/${post.id}`}>
                        <Button variant="info" style={{ color: theme.foreground }} >Read More</Button>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        { loggedin && <Button variant="danger" onClick={()=>deletePost(post.id, author)}>Delete Post
                        </Button> }
                      </Card.ImgOverlay>
                    </Card>
                  </Col>
                )
              )
            } 
  </Row>
     );
}

export default PostComponent;