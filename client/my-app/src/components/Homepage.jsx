import React from 'react'

const Homepage = ({setLoginUser}) => {
  return (
    <>
    <div>Homepage</div>
    <button onClick={() => setLoginUser({}) }>Log out </button>
    </>
    
  )
}

export default Homepage