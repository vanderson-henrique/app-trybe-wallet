import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { loginAction } from '../actions';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
    this.clickLogin = this.clickLogin.bind(this);
    this.verifyFields = this.verifyFields.bind(this);

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  changeValue({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.verifyFields());
  }

  clickLogin() {
    const { login, history } = this.props;
    const { email } = this.state;
    login(email);
    return history.push('/app-trybe-wallet/carteira');
  }

  // Referência desta função para validação de email:
  // https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
  validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  verifyFields() {
    const { email, password } = this.state;
    const numberCharacteres = 5;
    if (password.length > numberCharacteres && this.validarEmail(email)) {
      this.setState({
        isDisabled: false,
      });
    }
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div className="container-form-login">
        <Form className="Form">
        <h1>Trybe Wallet</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label htmlFor="name">
            email
          </Form.Label>
          <Form.Control
            className="input"
            data-testid="email-input"
            type="text"
            id="email"
            name="email"
            value={ email }
            onChange={ this.changeValue }
            placeholder="Insira um e-mail válido"
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label htmlFor="name">
            password
          </Form.Label>
          <Form.Control
            className="input"
            data-testid="password-input"
            type="password"
            id="password"
            name="password"
            value={ password }
            onChange={ this.changeValue }
            placeholder="Insira uma senha de 6 dígitos"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          disabled={ isDisabled }
          onClick={ this.clickLogin }
        >
          Entrar
        </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
