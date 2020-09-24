import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

import * as usuariosActions from '../../actions/usuariosActions';
class Usuarios extends Component {
	// async componentDidMount() {
	// 	const response = await axios.get(
	// 		'http://jsonplaceholder.typicode.com/users'
	// 	);
	// 	this.setState({
	// 		usuarios: response.data,
	// 	});
	// }

	ponerFilas = () =>
		this.props.usuarios.map((usuario) => (
			<tr key={usuario.id}>
				<td>{usuario.name}</td>
				<td>{usuario.email}</td>
				<td>{usuario.website}</td>
			</tr>
		));

	render() {
		console.log(this.props);
		return (
			<div className='container-fluid pt-4 pb-2'>
				<table className='table table-striped table-dark table-bordered table-hover table-responsive-sm'>
					<thead className='thead-dark'>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Link</th>
						</tr>
					</thead>
					<tbody>{this.ponerFilas()}</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (reducers) => {
	return reducers.usuariosReducer;
};

export default connect(mapStateToProps, {
	usuariosActions,
})(Usuarios);
