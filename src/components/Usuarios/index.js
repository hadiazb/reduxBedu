import React, { Component } from 'react';
import Spinner from '../Spinner/index';
import NotFound from '../NotFound/index';
import Tabla from './Tabla';
import { connect } from 'react-redux';

import * as usuariosActions from '../../actions/usuariosActions';
class Usuarios extends Component {
	componentDidMount() {
		if (!this.props.usuarios.lenght) {
			this.props.traerTodos();
		}
	}

	ponerContenido = () => {
		if (this.props.cargando) {
			return <Spinner />;
		}

		if (this.props.error) {
			return <NotFound mensaje={this.props.error} />;
		}
		return <Tabla />;
	};

	render() {
		return (
			<div className='container-fluid pt-3 pb-2'>
				<h2 className='pt-1 pb-2 d-flex justify-content-center align-items-center'>
					Usuarios
				</h2>
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
