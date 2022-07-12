import React, { useState } from 'react';

const List = ({ list, setList }) => {
	const deleteToDo = (i) => {
		let newList = [...list];
		setList(newList.filter((element, index) => index !== i));
	};

	return (
		<ul className='d-flex flex-column justify-content-between gap-2'>
			{list.map((item, index) => {
				return (
					<div key={index} className='d-flex gap-3 w'>
						<h3 checked={item.checked}>
							# {index + 1} {item.text}
						</h3>
						<input
							className='form-check-input'
							type='checkbox'
							value=''
							id='flexCheckDefault'
						/>
						<button
							onClick={(e) => deleteToDo(index)}
							className='btn btn-danger'
						>
							Delete
						</button>
					</div>
				);
			})}
		</ul>
	);
};

export default List;
