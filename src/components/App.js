import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Layout from './Layout/index';
import Usuarios from './Usuarios/index';

const Tareas = () => {
	return (
		<div className='container-fluid pt-2 pb-2'>
			<h3> Tareas </h3>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<Router>
				<Layout>
					<Switch>
						<Route exact component={Usuarios} path='/usuarios' />
						<Route exact component={Tareas} path='/tareas' />
					</Switch>
				</Layout>
			</Router>
		</div>
	);
};

export default App;
