import axios from 'axios';
import {
	TRAER_TODOS,
	CARGANDO,
	ERROR,
} from '../types/publicacionesType';

export const traerTodos = () => async (dispatch) => {
	dispatch({
		type: CARGANDO,
	});
	try {
		const respuesta = await axios.get(
			'http://jsonplaceholder.typicode.com/posts'
		);
		dispatch({
			type: TRAER_TODOS,
			payload: respuesta.data,
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: 'Algo salio mal, intente mas tarde',
		});
	}
};
