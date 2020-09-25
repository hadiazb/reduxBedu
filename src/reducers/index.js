import { combineReducers } from 'redux';
import usuariosReducer from './usuariosReducer';
import tareasReducer from './tareasReducer';
import publicacionesReducer from './publicacionesReducer';

export default combineReducers({
	usuariosReducer,
	tareasReducer,
	publicacionesReducer,
});
