import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';


import { createUserWithEmailAndPassword } from '../../services/auth.service';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return;
    }

    try {
      await createUserWithEmailAndPassword(
        displayName,
        email,
        password
      )

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

    } catch (error) {
      console.error(error);
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="sign-up">
        <h2 className="title">Eu não tenho conta</h2>
        <span>Cadastrar email e senha</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Nome"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Senha"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirma Senha"
            required
          />

          <CustomButton type='submit'>Cadastrar</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;