import React from 'react';
import io from 'socket.io-client';
import Cookies from 'js-cookie';
import styled from 'styled-components';

import EmailForm from '../components/email-form';

const ASK_EMAIL = 0;
const WAIT_CODE = 1;
const SUCCESS = 2;

const socket = io();

const Container = styled.main`
  height: 100%;
`;

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

  handleLoginSuccess(code) {
    Cookies.set('access_token', code);
    this.setState({ phase: SUCCESS });

    setTimeout(() => {
      location.href = '/private';
    }, 1000);
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

    return <Container>{component}</Container>;
  }
}

export default LoginForm;
