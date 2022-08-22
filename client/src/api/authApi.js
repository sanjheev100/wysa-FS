import axios from 'axios'

export const loginApi = async (payload) => {
  return await axios.post(`${process.env.REACT_APP_BACKEND}/login`, { payload })
}

export const getUserDetailsApi = async (access_token) => {
  return await axios.get(`${process.env.REACT_APP_BACKEND}/userDetails`, {
    headers: {
      'X-auth-Token': access_token,
      'content-type': 'application/json',
    },
  })
}

export const logoutApi = async (access_token) => {
  return await axios.post(
    `${process.env.REACT_APP_BACKEND}/logout`,
    {},
    {
      headers: {
        'X-auth-Token': access_token,
        'content-type': 'application/json',
      },
    }
  )
}

export const signUpApi = async (payload) => {
  return await axios.post(`${process.env.REACT_APP_BACKEND}/signup`, payload)
}
