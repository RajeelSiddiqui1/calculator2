import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <Container className="calculator-container">
      <Row>
        <Col>
          <input type="text" className="form-control mb-2 calculator-display" value={input} readOnly />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="w-100 mb-2" variant="danger" onClick={handleClear}>C</Button>
        </Col>
        <Col>
          <Button className="w-100 mb-2" variant="warning" onClick={handleDelete}>DEL</Button>
        </Col>
      </Row>
      <Row>
        {[7, 8, 9, '/'].map((val) => (
          <Col key={val}>
            <Button className="w-100 mb-2" onClick={() => handleClick(val.toString())}>{val}</Button>
          </Col>
        ))}
      </Row>
      <Row>
        {[4, 5, 6, '*'].map((val) => (
          <Col key={val}>
            <Button className="w-100 mb-2" onClick={() => handleClick(val.toString())}>{val}</Button>
          </Col>
        ))}
      </Row>
      <Row>
        {[1, 2, 3, '-'].map((val) => (
          <Col key={val}>
            <Button className="w-100 mb-2" onClick={() => handleClick(val.toString())}>{val}</Button>
          </Col>
        ))}
      </Row>
      <Row>
        {['0', '.', '=', '+'].map((val) => (
          <Col key={val}>
            <Button className="w-100 mb-2" onClick={val === '=' ? handleCalculate : () => handleClick(val.toString())}>{val}</Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Calculator;
