import React from 'react';
import io from 'socket.io-client';

import EmailForm from '../components/email-form';

const ASK_EMAIL = 0;
const WAIT_CODE = 1;
const SUCCESS = 2;

const socket = io();

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phase: ASK_EMAIL
    };

    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    socket.on('login_success', this.handleLoginSuccess);
  }

  handleLoginSuccess() {
    this.setState({ phase: SUCCESS });
  }

  handleSubmit(email) {
    socket.emit('login', email);
    this.setState({ phase: WAIT_CODE });
  }

  render() {
    const component = [
      <EmailForm onSubmit={this.handleSubmit} />,
      <div>We have sent you an e-mail with a magic link. Open it to login</div>,
      <div>Success!</div>
    ][this.state.phase];

    return <div>{component}</div>;
  }
}

export default LoginForm;
