import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({dogs}) => {
	return (
			<div className="navbar">
				<div className="navbar-item title" >Dog Shelter</div>
				<NavLink exact activeClassName='active-link' className="navbar-item" to='/dogs'>Home</NavLink>
				{dogs.map(dog => <NavLink key={dog.name} exact activeClassName='active-link' className="navbar-item" to={`/dogs/${dog.name}`}>{dog.name}</NavLink>)}
			</div>
	);
}

export default withRouter(NavBar);