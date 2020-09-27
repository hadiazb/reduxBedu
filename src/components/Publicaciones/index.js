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
			return <h1>{usuariosReducer.error}</h1>;
		}
		if (
			!usuariosReducer.usuarios.length ||
			usuariosReducer.cargando
		) {
			return <Spinner />;
		}

		const nombre = usuariosReducer.usuarios[key].name;

		return (
			<h2 className=' card-header'>Publicaciones de {nombre}</h2>
		);
	};

	ponerPublicaciones = () => {
		const {
			usuariosReducer: { usuarios },
			usuariosReducer,
			publicacionesReducer,
			publicacionesReducer: { publicaciones },
			match: {
				params: { key },
			},
		} = this.props;

		if (!usuarios.length) {
			return;
		}

		if (usuariosReducer.error) {
			return;
		}

		if (publicacionesReducer.cargando) {
			return <Spinner />;
		}

		if (publicacionesReducer.error) {
			return (
				<h5 className='card-title'>
					{publicacionesReducer.error}
				</h5>
			);
		}

		if (!publicaciones.length) {
			return;
		}

		if (!('publicaciones_key' in usuarios[key])) {
			return;
		}

		const { publicaciones_key } = usuarios[key];

		return publicaciones[publicaciones_key].map(
			(publicacion) => (
				<div className='card-body' key={publicacion.id}>
					<h3 className='card-title'>{publicacion.title}</h3>
					<p className='card-text'>{publicacion.body}</p>
				</div>
			)
		);
	};

	render() {
		console.log(this.props);
		return (
			<div className='container-fluid pt-3 pb-2'>
				<div className='card'>
					{this.ponerUsuario()}
					{this.ponerPublicaciones()}
				</div>
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
