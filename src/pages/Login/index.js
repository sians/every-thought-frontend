import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { actions as authActions, selectors as authSelectors } from '../../store/reducers/auth'

import TextField from '../../components/TextField'
import Button from '../../components/Button'

// import logo from 'assets/images/logo.svg'
// import logoFull from 'assets/images/logo-full.svg'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const login = useCallback((email, password) => dispatch(authActions.login(email, password)), [dispatch])

  const loginLoading = useSelector(authSelectors.getLoginLoading)
  const loginError = useSelector(authSelectors.getLoginError)

  const handleChangeEmail = useCallback((value) => {
    setEmail(value.target.value)
  }, [])

  const handleChangePassword = useCallback((value) => {
    setPassword(value.target.value)
  }, [])

  const handleSubmitForm = useCallback(() => {
    login(email, password)
  }, [email, password])

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      handleSubmitForm()
    }
  }, [handleSubmitForm])

  return (
    <div className="login-page row" onKeyPress={handleKeyPress}>

      <div className="center-section">

        <div className="form">
          <div className="field">
            <TextField
              value={email}
              type="email"
              placeholder={'email@mail.com'}
              error={loginError}
              onChange={handleChangeEmail} />
          </div>

          <div className="field">
            <TextField
              value={password}
              type="password"
              placeholder={'*****'}
              error={loginError}
              onChange={handleChangePassword} />
          </div>

          <div className="form-error">
            { loginError &&
              <p>{`${loginError.status}`}</p>
            }
          </div>

          <div className="button-container">
            <Button text={'submit'} action={handleSubmitForm} type="black" loading={loginLoading} />
          </div>
        </div>

      </div>

      <div className="right-section"></div>
    </div>
  )
}

export default Login
