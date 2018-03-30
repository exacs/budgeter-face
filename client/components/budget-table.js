import React from 'react';
import styled from 'styled-components';

const Add = styled.button`
  color: #333;
  font-size: 18px;
  border: none;
  background: none;
`;

const Icon = styled.i`
  vertical-align: middle;
`;

const Label = styled.span`
  vertical-align: middle;
  font-weight: bold;
`;

class BudgetTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Add>
        <Icon className="material-icons">add</Icon>
        <Label>Add service</Label>
      </Add>
    );
  }
}

export default BudgetTable;
