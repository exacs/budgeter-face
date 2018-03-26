import React from 'react';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.email);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Write your e-mail address to log in</label>
          <input
            type="email"
            autocorrect="off"
            name="email"
            onChange={this.handleChange}
          />
          <input type="submit" value="Login" />
        </div>
      </form>
    );
  }
}

export default EmailForm;
