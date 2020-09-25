import {
	TRAER_POR_USUARIO,
	CARGANDO,
	ERROR,
} from '../types/publicacionesTypes';
const INITIAL_STATE = {
	publicaciones: [],
	cargando: false,
	error: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRAER_POR_USUARIO:
			return {
				...state,
				publicaciones: action.payload,
				cargando: false,
				error: '',
			};

		case CARGANDO:
			return { ...state, cargando: true };

		case ERROR:
			return {
				...state,
				cargando: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
