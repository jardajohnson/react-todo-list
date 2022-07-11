import React, { useState } from 'react';

const List = ({ list }) => {
	return (
		<ul>
			{list.map((item, index) => {
				return (
					<div>
						<h3 key={index} checked={item.checked}>
							# {index + 1} {item.text}
						</h3>
						<button className='btn btn-primary'>Delete</button>
					</div>
				);
			})}
		</ul>
	);
};

export default List;
