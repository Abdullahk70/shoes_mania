import React, { useState } from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PaymentForm = (props) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    // Implement payment processing logic here or send the data to a server (not shown in this example).
    alert(`Payment successful! Total Amount: PKR ${props.grandTotal}`);
  };

  return (
    <div className={`bg-${props.mde.bg}`}>
    <Container style={{marginTop:"10rem"}}>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mt-4">Payment Details</h2>
          <Form>
            <Form.Group>
              <Form.Label>Credit Card Number:</Form.Label>
              <Form.Control
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Expiry Date:</Form.Label>
              <Form.Control
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>CVV:</Form.Label>
              <Form.Control
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
              />
            </Form.Group>
            <p className="text-center">Grand Total: PKR {props.grandTotal}</p>
            <div className="text-center">
              <Button variant="primary" onClick={handlePayment}>
                Confirm Payment
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default PaymentForm;
