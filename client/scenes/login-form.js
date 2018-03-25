import React from 'react';
import fetch from 'isomorphic-fetch';
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
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(email) {
    const options = {
      method: 'post',
      body: {
        email
      },
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    fetch('/login', options)
      .then(response => response.json())
      .then(json => {
        this.setState({phase: WAIT_CODE});
      });
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
