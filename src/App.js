import List from './components/List';
import React, { useState } from 'react';

function App() {
	const [list, setList] = useState([
		{ text: 'Hello', checked: false },
		{ text: 'World', checked: false },
		{ text: 'HelloWorld', checked: false },
	]);

	return (
		<div>
			<header>
				<List list={list} />
				<h1 className='text-danger'>React</h1>
			</header>
		</div>
	);
}

export default App;
