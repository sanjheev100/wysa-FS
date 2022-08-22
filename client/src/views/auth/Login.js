import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import wysa from '../../asset/wysa_logo.png'
import './login.css'
import { loginApi } from '../../api/authApi'
import { UserState } from '../../context/userProvider'
import { getCookie, removeCookie, setCookie } from '../../utils/cookie'

const Login = () => {
  const [UserName, setUserName] = useState('sanjheev')
  const [password, setPassword] = useState('Asdf@1234')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const { userDetails, setUserDetails } = UserState()

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (password.length < 6) {
      return toast.error('Password must be atleast 6 characters')
    }
    const payload = {
      UserName,
      password,
    }
    setLoading(true)
    loginApi(payload)
      .then((res) => {
        setLoading(false)
        toast.success(res.data.message)
        setUserDetails(res.data.user)
        removeCookie('wysa')
        setCookie('wysa', res.data.token)
        navigate('/user/onboarding')
      })
      .catch((error) => {
        setLoading(false)
        toast.error(error.response.data.message)
      })
  }
  return (
    <>
      <img src={wysa} className='logo' alt='logo' />
      <br />
      <h1>Welcome back </h1>
      <br />

      {/* {JSON.stringify(userDetails)} */}
      <form onSubmit={handleLogin}>
        <label>UserName</label>
        <br />
        <br />
        <input
          type='text'
          placeholder='enter your username'
          name='UserName'
          autoComplete='off'
          onChange={(e) => setUserName(e.target.value)}
          required
          value={UserName}
          className='login-input'
        />
        <br />
        <br />
        <label>Password</label>
        <br />
        <br />
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder='enter your password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          required
          value={password}
          className='login-input'
        />
        <br />
        <br />
        <div>
          <input
            type='checkbox'
            onClick={() => setPasswordVisible(!passwordVisible)}
            name='Show Password'
          />
          &nbsp;
          <label htmlFor='show password'>Show Password</label>
        </div>
        <br />
        <button disabled={loading} type='submit' className='login-button'>
          Login
        </button>
        <Link style={{ textDecoration: 'none' }} to='/register'>
          New Here?
        </Link>
      </form>
    </>
  )
}

export default Login
