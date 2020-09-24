import React from 'react';
import Menu from '../Menu/Menu';

const Layout = ({ children }) => (
	<div className='App'>
		<Menu />
		{children}
	</div>
);

export default Layout;
