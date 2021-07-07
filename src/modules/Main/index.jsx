import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { addDocumentTitle } from '../../library/utilities/functions'

const Main = () => {
  useEffect(() => {
    addDocumentTitle("Main")
  }, [])
  return (
    <div className="login-option d-flex flex-column mt-4">
      <Link to="/login" className="btn btn-primary">Log In</Link>
      <Link to="/signup" className="btn btn-primary mt-3">Sign Up</Link>
    </div>

  )
}
export default Main