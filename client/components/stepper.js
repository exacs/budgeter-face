import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  top: 18px;
  width: 100%;
  height: 4px;
  background: #000;
`;

const Steps = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const Step = styled.li`
  width: 160px;
  text-align: center;
`;

const Number = styled.div`
  width: 40px;
  height: 40px;
  padding: 4px;
  margin: auto;
  border: 4px solid #000;
  border-radius: 100%;
  text-align: center;
  background: ${props => props.active ? '#000' : '#fff'};
  color: ${props => props.active ? '#fff' : '#000'};
  font-size: 18px;
  font-weight: 700;
`;

const Text = styled.div`
  width: 160px;
  padding: 8px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
`;

const Stepper = ({ steps, current }) => (
  <Container>
    <Line />
    <Steps>
      {
        steps.map((step, i) => (
          <Step key={i+1}>
            <Number active={i+1 === current}>{i+1}</Number>
            <Text active={i+1 === current}>{step}</Text>
          </Step>
        ))
      }
    </Steps>
  </Container>
);

export default Stepper;
