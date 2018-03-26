import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  flex: 0 0 auto;
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  max-width: 256px;
  margin: auto;
`;

const Input = styled.input`
  display: block;
  border: none;
  border-bottom: 1px solid #000;
  margin: 8px 0;
  font-size: 1.2rem;
  width: 100%;
  color: #000;
  outline: none;
  text-align: center;
`;

const Submit = styled.input`
  display: block;
  background: #000;
  color: #fff;
  font-size: 1.2rem;
  width: 100%;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  padding: 4px;
  text-transform: uppercase;
`;

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
      <Container>
        <Content>
          <Title>Write your e-mail address to log in</Title>
          <Form onSubmit={this.handleSubmit}>
            <label>
              <Input
                type="text"
                placeholder="example@domain.com"
                type="email"
                autoComplete="off"
                name="email"
                onChange={this.handleChange}
              />
            </label>
            <Submit type="submit" value="Login" />
          </Form>
        </Content>
      </Container>
    );
  }
}

export default EmailForm;
