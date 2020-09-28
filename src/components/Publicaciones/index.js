import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner/index';
import NotFound from '../NotFound/index';
import Comentarios from './Comentarios';

import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

const { traerTodos: usuariosTraerTodos } = usuariosActions;
const {
	traerPorUsuario: publicacionesTraerPorUsuario,
	abrirCerrar,
	traerComentarios,
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
			return <NotFound mensaje={usuariosReducer.error} />;
		}
		if (
			!usuariosReducer.usuarios.length ||
			usuariosReducer.cargando
		) {
			return <Spinner />;
		}

		const nombre = usuariosReducer.usuarios[key].name;

		return (
			<h2 className=' card-header'>
				Publicaciones de {nombre}
			</h2>
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
				<div className='card-body'>
					<p className='card-text'>
						{publicacionesReducer.error}
					</p>
				</div>
			);
		}

		if (!publicaciones.length) {
			return;
		}

		if (!('publicaciones_key' in usuarios[key])) {
			return;
		}

		const { publicaciones_key } = usuarios[key];

		return this.mostrarInfo(
			publicaciones[publicaciones_key],
			publicaciones_key
		);
	};

	mostrarInfo = (publicaciones, pub_key) =>
		publicaciones.map((publicacion, com_key) => (
			<div
				className='card-body'
				key={publicacion.id}
				onClick={() =>
					this.mostrarComentarios(
						pub_key,
						com_key,
						publicacion.comentarios
					)
				}
				role='button'
			>
				<h3 className='card-title'>{publicacion.title}</h3>
				<p className='card-text'>{publicacion.body}</p>
				<span>
					{publicacion.abierto ? <Comentarios /> : ''}
				</span>
			</div>
		));

	mostrarComentarios = (pub_key, com_key, comentarios) => {
		console.log('Comentarios', comentarios);
		this.props.abrirCerrar(pub_key, com_key);
		this.props.traerComentarios(pub_key, com_key);
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
	abrirCerrar,
	traerComentarios,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Publicaciones);
