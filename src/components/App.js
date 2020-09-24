import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Layout from './Layout/index';
import Usuarios from './Usuarios/index';
import Tareas from './Tareas/index';

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
