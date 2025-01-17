import * as React from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertTest() {
  return (
    <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again.
      </p>
    </Alert>
  )
}

export default AlertTest;