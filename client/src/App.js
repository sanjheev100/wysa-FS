import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getUserDetailsApi } from './api/authApi'
import './App.css'
import { UserState } from './context/userProvider'
import { getCookie } from './utils/cookie'

const MainForm = lazy(() => import('./views/Mainform/MainForm.jsx'))
const Login = lazy(() => import('./views/auth/Login'))
const Register = lazy(() => import('./views/auth/Register.js'))
const NotFound = lazy(() => import('./views/NotFound'))
function App() {
  const { userDetails, setUserDetails } = UserState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (getCookie('wysa') !== undefined) {
      setLoading(true)

      getUserDetailsApi(getCookie('wysa'))
        .then((res) => {
          setLoading(false)
          setUserDetails({ ...userDetails, ...res.data })
        })
        .catch((error) => {
          setLoading(false)
        })
    }
  }, [])

  return (
    <>
      {!loading ? (
        <Suspense>
          <div className='App'>
            <ToastContainer />
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route exact path='/user/onboarding' element={<MainForm />} />
              <Route exact path='/' element={<Login />} />
              <Route exact path='/register' element={<Register />} />
            </Routes>
          </div>
        </Suspense>
      ) : (
        <h4>{`${loading}`}</h4>
      )}
    </>
  )
}

export default App
