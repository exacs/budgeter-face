import React from 'react';

import EmailForm from '../components/email-form';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(email) {
    console.log('Submit!!!', email);
  }

  render() {
    return <EmailForm onSubmit={this.handleSubmit} />;
  }
}

export default LoginForm;
