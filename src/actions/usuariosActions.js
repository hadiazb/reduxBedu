import axios from 'axios';

export const traerTodos = () => async (dispatch) => {
	const response = await axios.get(
		'http://jsonplaceholder.typicode.com/users'
	);
	dispatch({
		type: 'traer_usuarios',
		payload: response.data,
	});
};
