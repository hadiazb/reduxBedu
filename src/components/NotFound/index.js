import React from 'react';

const NotFound = (props) => {
	return (
		<div className='bg-light text-dark d-flex justify-content-center flex-direction-column align-items-center h-100 flex-wrap'>
			<h1 className='pt-5 pl-5 pr-5 pb-5'>Pagina no encontrada</h1>
			<h4>{props.mensaje}</h4>
		</div>
	);
};

export default NotFound;
