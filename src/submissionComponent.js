import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';


const SubmissionForm = () => {
    return ( 
        <Form>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className='text-success'>Enter email to subscribe for newsletters</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-success">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

            <Button variant="info" type="submit">
        Submit
      </Button>
    </Form>
     );
}
 
export default SubmissionForm;