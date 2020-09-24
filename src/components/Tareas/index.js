import React from 'react';
import { connect } from 'react-redux';

const Tareas = (props) => {
	console.log(props);
	return (
		<div className='container-fluid pt-2 pb-2'>
			<h3>Tareas</h3>
		</div>
	);
};

const mapStateToProps = (reducers) => {
	return reducers.tareasReducer;
};

export default connect(mapStateToProps, {
	/*Actions*/
})(Tareas);
