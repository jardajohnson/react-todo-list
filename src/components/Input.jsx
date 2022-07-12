import React from 'react';

const Input = ({ input, setInput, setList, list, placeholder }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const newToDo = { text: e.target.textInput.value, checked: false };
		console.log(newToDo);
		console.log(list);
		setList([...list, newToDo]);
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<input
				type='text'
				className='border rounded'
				onChange={(e) => setInput(e.target.value)}
				name='textInput'
				placeholder={placeholder}
			/>
			<button className='btn btn-success'>Add</button>
		</form>
	);
};

export default Input;
