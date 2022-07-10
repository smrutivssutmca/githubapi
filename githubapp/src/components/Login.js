import React from 'react';
import LoginGithub from 'react-login-github';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

function Login() {
    return ( <LoginGithub clientId="Iv1.481e70d11f202292"
    onSuccess={onSuccess}
    onFailure={onFailure}
  /> );
}

export default Login;