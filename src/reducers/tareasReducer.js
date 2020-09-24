const INITIAL_STATE = {
	tareas: [
		{
			id: 1,
			tarea: 'tarea uno',
			status: false,
		},
		{
			id: 2,
			tarea: 'tarea uno',
			status: false,
		},
		{
			id: 3,
			tarea: 'tarea uno',
			status: true,
		},
	],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'traer_tareas':
			return { ...state, tareas: action.payload };

		default:
			return state;
	}
};
