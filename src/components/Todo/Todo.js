import React from 'react';

export default ({ text, id, deleteTodo }) => (
	<>
		<li>{text}</li>
		<button onClick={() => deleteTodo(id)}>X</button>
	</>
);
