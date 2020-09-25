import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

const Tabla = (props) => {
	const ponerFilas = () =>
		props.usuarios.map((usuario, key) => (
			<tr key={usuario.id}>
				<td>{usuario.name}</td>
				<td>{usuario.email}</td>
				<td>{usuario.website}</td>
				<td className='d-flex justify-content-center align-items-center'>
					<Link to={`/publicaciones/${key}`}>
						<div className='eye-solid icon'></div>
					</Link>
				</td>
			</tr>
		));
	return (
		<table className='table table-striped table-dark table-bordered table-hover table-responsive-sm '>
			<thead className='thead-dark'>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Link</th>
					<th className='d-flex justify-content-center'>View</th>
				</tr>
			</thead>
			<tbody>{ponerFilas()}</tbody>
		</table>
	);
};

const mapStateToProps = (reducers) => {
	return reducers.usuariosReducer;
};

export default connect(mapStateToProps)(Tabla);
