import React, { useState } from 'react';
import List from './components/List';
import Input from './components/Input';

function App() {
	const [list, setList] = useState([
		{ text: 'Hello', checked: false },
		{ text: 'World', checked: false },
		{ text: 'HelloWorld', checked: false },
	]);

	const [input, setInput] = useState('Type a todo here!');

	return (
		<div className='container d-flex flex-column justify-content-center align-items-center gap-3'>
			<h1>Todo List</h1>
			{JSON.stringify(list)}
			<Input
				input={input}
				setInput={setInput}
				setList={setList}
				list={list}
				placeholder='Enter a Todo here'
			/>
			<List list={list} setList={setList} />
		</div>
	);
}

export default App;
