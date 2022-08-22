import React, { useState, useEffect } from 'react'
import { getQuestions } from '../../api/QuestionApi'
import wysa from '../../asset/wysa_logo.png'
import { NormalChoose, TimerChoose } from '../../components/'
import './MainForm.css'
import { saveAnswersApi } from '../../api/AnswersApi'
import { toast } from 'react-toastify'
import PageAnimated from '../../components/animations/PageAnimated'
import { useNavigate } from 'react-router-dom'
import { UserState } from '../../context/userProvider'
import { getCookie, removeCookie } from '../../utils/cookie'
import { logoutApi } from '../../api/authApi'

const MainForm = () => {
  const [questions, setQuestions] = useState()

  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState({})
  const { userDetails } = UserState()
  const navigate = useNavigate()

  useEffect(() => {
    if (!userDetails) {
      navigate('/')
    }
  }, [userDetails])

  const loadAllQuestions = () => {
    setLoading(true)
    getQuestions(getCookie('wysa'))
      .then((res) => {
        setQuestions(res.data.questionList)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        if (error.response.status === 403) {
          navigate('/')
        }
        toast.error(error.response.data.message)
      })
  }

  useEffect(() => {
    loadAllQuestions()
  }, [])

  const handleChange = (questionID, e) => {
    result[questionID] = e.target.value
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (resultLen < questions?.length - 1) {
      return toast.error('Need to answer all questions')
    }
    const payload = {
      result,
    }

    saveAnswersApi(getCookie('wysa'), payload)
      .then((res) => {
        toast.success(res.data.message)
        setPage(0)
        setResult({})
      })
      .catch((error) => {
        toast.error(error)
      })
  }

  var resultLen = Object.keys(result).length

  const handleLogout = (e) => {
    const token = getCookie('wysa')
    logoutApi(token)
      .then((res) => {
        removeCookie('wysa')
        toast.success(res.data.message)
        navigate('/')
      })
      .catch((error) => {
        toast.error(error.response.data.message)
      })
  }

  return (
    <>
      {loading ? (
        <h4>Loading</h4>
      ) : (
        <>
          {!questions ? (
            <h4>No Question at the moment</h4>
          ) : (
            <>
              <PageAnimated>
                <button
                  className='logout-button'
                  onClick={() => handleLogout()}
                >
                  Logout
                </button>
                <img src={wysa} className='logo' alt='logo' />
                <br />
                {`Hello ${userDetails?.UserName}, Welcome to wysa`}
                <br />
                <br />
                <br />
                <h4 style={{ color: 'white' }}>
                  {questions[page]?.FullQuestion}
                </h4>

                <br />

                {/* Question Logic */}
                {questions[page]?.QuestionType === 'standard' ? (
                  <NormalChoose
                    questionID={questions[page]?._id}
                    options={questions[page]?.QuestionOptions}
                    handleChange={handleChange}
                    value={result[questions[page]?._id]}
                  />
                ) : questions[page]?.QuestionType === 'time' ? (
                  <TimerChoose
                    questionID={questions[page]?._id}
                    handleChange={handleChange}
                    value={result[questions[page]?._id]}
                  />
                ) : (
                  <h4>None</h4>
                )}
                <br />
                <br />
                <br />
                {/* Buttons Logic */}
                {page > 0 && (
                  <button
                    disabled={page === 0}
                    className='prev-button button'
                    onClick={() => setPage(page - 1)}
                  >
                    {`${'<'}`}
                  </button>
                )}

                {page < questions?.length - 1 ? (
                  <button
                    disabled={page === questions?.length - 1}
                    onClick={() => setPage(page + 1)}
                    className='next-button button'
                  >
                    {`${'>'}`}
                  </button>
                ) : page === questions?.length - 1 ? (
                  <button
                    className='submit-button'
                    onClick={(e) => handleSubmit(e)}
                  >
                    {`${'>>'}`}
                  </button>
                ) : (
                  <>None</>
                )}
              </PageAnimated>
            </>
          )}
        </>
      )}
    </>
  )
}

export default MainForm
