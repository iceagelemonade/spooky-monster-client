import React from "react"
import { Navigate } from 'react-router-dom'


const Home = (props) => {
  if (props.user) {
    return (
      <Navigate to='/monsters' />
    )
  }
	return (
		<>
      <h2>Welcome to the Monster Menagerie!</h2>
			<h5>Please login to see these spooky creations</h5>
		</>
	)
}

export default Home
