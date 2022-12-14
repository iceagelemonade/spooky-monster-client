import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Item className='navbar-text ps-3'>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
    <Nav.Item className='navbar-text ps-3'>
			<Link to='/monsters' style={linkStyle}>
				View Monsters
			</Link>
		</Nav.Item>
		<Nav.Item className='navbar-text ps-3'>
			<Link to='/create' style={linkStyle}>
				Create a Monster
			</Link>
		</Nav.Item>
		<Nav.Item className='navbar-text ps-3'>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className='navbar-text ps-3'>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item className='navbar-text ps-3'>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Item className='navbar-text ps-3'>

			<Link to='/' style={linkStyle}>Home</Link>

		</Nav.Item>
	</>
)

const Header = ({ user }) => (
	<Navbar bg='dark' variant='dark' expand='md' className='ps-3'>
		<Navbar.Brand>
            <Link to='/' style={linkStyle}>
                Monsterzz
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-autoss'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
