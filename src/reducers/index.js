import { combineReducers } from 'redux';
import usuariosReducer from './usuariosReducer';
import tareasReducer from './tareasReducer';

export default combineReducers({
	usuariosReducer,
	tareasReducer,
});
