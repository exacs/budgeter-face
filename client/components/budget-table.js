import React from 'react';

class BudgetTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <select>
                {
                  this.props.options.map(opt => (
                    <option value={opt} key={opt}>{opt}</option>
                  ))
                }
              </select>
            </td>
            <td>
              <input type='number' />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default BudgetTable;
