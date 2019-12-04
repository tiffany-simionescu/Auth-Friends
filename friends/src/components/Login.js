import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err))
  };

  render () {
    return (
      <div>
        <form onSubmit={this.login}>
          <input 
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <input 
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <button>Log in</button>
        </form>
      </div>
    )
  }
}

export default Login;