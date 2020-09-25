import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

const { traerTodos: usuariosTraerTodos } = usuariosActions;
const {
	traerPorUsuario: publicacionesTraerPorUsuario,
} = publicacionesActions;

class Publicaciones extends Component {
	async componentDidMount() {
		if (!this.props.usuariosReducer.usuarios.lenght) {
			await this.props.usuariosTraerTodos();
		}
		this.props.publicacionesTraerPorUsuario(
			this.props.match.params.key
		);
	}

	render() {
		console.log(this.props);
		return (
			<div className='container-fluid pt-3 pb-2'>
				<h1>Publicaciones de {this.props.match.params.key}</h1>
			</div>
		);
	}
}

const mapStateToProps = ({
	usuariosReducer,
	publicacionesReducer,
}) => {
	return { usuariosReducer, publicacionesReducer };
};

const mapDispatchToProps = {
	usuariosTraerTodos,
	publicacionesTraerPorUsuario,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Publicaciones);
