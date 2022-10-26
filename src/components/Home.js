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
			<h2>Please login to see these spooky creations</h2>
		</>
	)
}

export default Home
