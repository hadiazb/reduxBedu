import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner/index';

import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

const { traerTodos: usuariosTraerTodos } = usuariosActions;
const {
	traerPorUsuario: publicacionesTraerPorUsuario,
} = publicacionesActions;

class Publicaciones extends Component {
	async componentDidMount() {
		const {
			usuariosTraerTodos,
			match: {
				params: { key },
			},
			publicacionesTraerPorUsuario,
		} = this.props;

		if (!this.props.usuariosReducer.usuarios.length) {
			await usuariosTraerTodos();
		}
		if (this.props.usuariosReducer.error) {
			return;
		}

		if (
			!(
				'publicaciones_key' in
				this.props.usuariosReducer.usuarios[key]
			)
		) {
			await publicacionesTraerPorUsuario(key);
		}
	}

	ponerUsuario = () => {
		const {
			match: {
				params: { key },
			},
			usuariosReducer,
		} = this.props;

		if (usuariosReducer.error) {
			return <h1>No encontrada</h1>;
		}
		if (
			!usuariosReducer.usuarios.length ||
			usuariosReducer.cargando
		) {
			return <Spinner />;
		}

		const nombre = usuariosReducer.usuarios[key].name;

		return <h1>Publicaciones de {nombre}</h1>;
	};

	render() {
		console.log(this.props);
		return (
			<div className='container-fluid pt-3 pb-2'>
				{this.ponerUsuario()}
				{this.props.match.params.key}
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
