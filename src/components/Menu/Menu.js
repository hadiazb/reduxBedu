import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<nav className='navbar navbar-dark bg-dark'>
			<Link className='navbar-brand' to='/'>
				Home
			</Link>
			<div>
				<Link className='navbar-brand' to='/usuarios'>
					Usuarios
				</Link>
				<Link className='navbar-brand' to='/tareas'>
					Tareas
				</Link>
			</div>
		</nav>
	);
};

export default Menu;
