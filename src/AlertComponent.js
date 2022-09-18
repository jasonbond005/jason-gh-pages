import Alert from 'react-bootstrap/Alert';
import React from 'react';

function AlertComponent({props}) {
  return (
  
      
        <Alert variant="warning" >
          {props}
        </Alert>
     
  );
}

export default AlertComponent;