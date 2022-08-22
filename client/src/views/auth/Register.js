import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import wysa from '../../asset/wysa_logo.png'
import './register.css'
import { signUpApi } from '../../api/authApi'

const Register = () => {
  const [UserName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    const payload = {
      UserName,
      password,
    }
    if (!UserName || !password) {
      return toast.error('UserName and Password is must')
    } else if (password !== confirmPassword) {
      return toast.error('Password and Confirm Password are not matching')
    } else if (password.length < 6) {
      return toast.error('Password length atleast > 5')
    }
    setLoading(true)
    signUpApi({ payload })
      .then((res) => {
        toast.success(res.data.message)
        setUserName('')
        setPassword('')
        setConfirmPassword('')
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        toast.error(error.response.data.message)
        setLoading(false)
      })
  }
  return (
    <>
      <img src={wysa} className='logo' alt='logo' />
      <br />
      <h1>Welcome New User</h1>
      <br />
      <br />
      <br />

      {/* {JSON.stringify(userDetails)} */}
      <form onSubmit={handleRegister}>
        <label>Username</label>
        <br />

        <input
          type='text'
          placeholder='unique username'
          name='UserName'
          autoComplete='off'
          onChange={(e) => setUserName(e.target.value)}
          required
          value={UserName}
          className='register-input'
        />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder='enter your password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          required
          value={password}
          className='register-input'
        />
        <br />
        <br />
        <label>Confirm password</label>
        <br />
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder='retype your password'
          name='password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          value={confirmPassword}
          className='register-input'
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
        <br />
        <button disabled={loading} type='submit' className='login-button'>
          Register
        </button>
        <Link style={{ textDecoration: 'none' }} to='/'>
          have account Login ?
        </Link>
      </form>
    </>
  )
}

export default Register
