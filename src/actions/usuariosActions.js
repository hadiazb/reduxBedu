import axios from 'axios';
import {
	CARGANDO,
	ERROR,
	TRAER_TODOS,
} from '../types/usuariosTypes';

export const traerTodos = () => async (dispatch) => {
	dispatch({
		type: CARGANDO,
	});
	try {
		const response = await axios.get(
			'http://jsonplaceholder.typicode.com/users'
		);
		dispatch({
			type: TRAER_TODOS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: `Informacion de usuario no disponible, error: ${error.message}`,
		});
	}
};
