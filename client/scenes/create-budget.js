import React from 'react';
import styled from 'styled-components';

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
          <div>Step 1 - Step 2</div>
        </header>
        <main>
        </main>
      </Container>
    );
  }
}

export default CreateBudget;
