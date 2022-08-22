import axios from 'axios'

export const saveAnswersApi = async (access_token, payload) => {
  return await axios.post(
    `${process.env.REACT_APP_BACKEND}/saveAnswers`,
    payload,
    {
      headers: {
        'X-auth-Token': access_token,
        'content-type': 'application/json',
      },
    }
  )
}
