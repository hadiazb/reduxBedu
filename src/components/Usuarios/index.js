import React, { Component } from 'react';
import axios from 'axios';

class Usuarios extends Component {
	constructor() {
		super();
		this.state = {
			usuarios: [],
		};
	}

	async componentDidMount() {
		const response = await axios.get(
			'http://jsonplaceholder.typicode.com/users'
		);
		this.setState({
			usuarios: response.data,
		});
	}

	ponerFilas = () =>
		this.state.usuarios.map((usuario) => (
			<tr key={usuario.id}>
				<td>{usuario.name}</td>
				<td>{usuario.email}</td>
				<td>{usuario.website}</td>
			</tr>
		));

	render() {
		console.log(this.state.usuarios);
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

export default Usuarios;
