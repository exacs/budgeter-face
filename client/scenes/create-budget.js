import React from 'react';
import styled from 'styled-components';

import Stepper from '../components/stepper';

const Container = styled.div`
  max-width: 720px;
  margin: auto;
`;

class CreateBudget extends React.Component {
  render() {
    return (
      <Container>
        <header>
          <h1>Create your budget</h1>
          <div>
            <Stepper
              steps={['The big picture', 'Current month']}
              current={1}
            />
          </div>
        </header>
        <main>
        </main>
      </Container>
    );
  }
}

export default CreateBudget;
