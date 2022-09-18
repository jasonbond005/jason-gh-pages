import Image404 from './images/404.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';
const Error404 = () => {
    return (
        <Row>
            <Col className='p-5'>
                <Card>
                    <Card.Header as="h5">Page Not Found</Card.Header>
                    <Card.Body>
                        <Card.Title><small>Lost?</small></Card.Title>
                        <Card.Text>
                            <h2>404</h2>
                            <img src={Image404} className="image-fluid p-3" alt="404 error message" width="250"/>
                        </Card.Text>
                        <Link to = "/">
                            <Button variant="primary">Go Back Home</Button>
                        </Link>
                    </Card.Body>
                </Card>

            </Col>
        </Row>
    );
}

export default Error404;