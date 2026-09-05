import React from 'react'

const NotFound = () => {
  return (
    <div className="container mt-5">
      <div className="row p-5 text-center">
        <h3 className="mb-4">404 Not Found</h3>
        <p className="mb-5 text-muted" style={{opacity:"1",letterSpacing:"0.5px"}}>
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  )
}

export default NotFound
