import React, { Component } from 'react';
import Spinner from '../Spinner/index';
import NotFound from '../NotFound/index';
import { connect } from 'react-redux';

import * as usuariosActions from '../../actions/usuariosActions';
class Usuarios extends Component {
	componentDidMount() {
		this.props.traerTodos();
	}

	ponerFilas = () =>
		this.props.usuarios.map((usuario) => (
			<tr key={usuario.id}>
				<td>{usuario.name}</td>
				<td>{usuario.email}</td>
				<td>{usuario.website}</td>
			</tr>
		));

	ponerContenido = () => {
		if (this.props.cargando) {
			return <Spinner />;
		}

		if (this.props.error) {
			return <NotFound />;
		}
		return (
			<table className='table table-striped table-dark table-bordered table-hover table-responsive-sm '>
				<thead className='thead-dark'>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Link</th>
					</tr>
				</thead>
				<tbody>{this.ponerFilas()}</tbody>
			</table>
		);
	};

	render() {
		return (
			<div className='container-fluid pt-4 pb-2'>
				{this.ponerContenido()}
			</div>
		);
	}
}

const mapStateToProps = (reducers) => {
	return reducers.usuariosReducer;
};

export default connect(
	mapStateToProps,
	usuariosActions
)(Usuarios);
