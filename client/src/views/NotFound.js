import React from 'react'
import pagenotfoundImage from '../asset/pagenotfound.jpg'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <>
      <h1>Oops..! 404 Page Not Found</h1>
      <p>Looks like you came to wrong page on our site</p>
      <img src={pagenotfoundImage} height='300' width='300' alt='not found' />
      <br />
      <br />
      <br />
      <Link to='/'>
        <buton>Click here to get back on track</buton>
      </Link>
    </>
  )
}

export default PageNotFound
