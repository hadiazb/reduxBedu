import React from 'react';
import './style.css';

const Spinner = () => {
	return (
		<div className='contenedor'>
			<div className='lds-ellipsis row'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Spinner;
