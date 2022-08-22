import axios from 'axios'

export const getQuestions = async (access_token) => {
  return await axios.get(`${process.env.REACT_APP_BACKEND}/getQuestions`, {
    headers: {
      'X-Auth-Token': access_token,
      'content-type': 'application/json',
    },
  })
}
