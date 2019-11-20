import React, { useState, useRef } from 'react';
import Todo from '../Todo';

let i = 10;

export default ({ apiTodos }) => {
	const [todos, setTodos] = useState(apiTodos || []);
	const [todo, setTodoText] = useState('');
	const inputEl = useRef('');

	const addTodo = e => {
		e.preventDefault();
		setTodos(todos => [
			...todos,
			{
				text: todo,
				id: ++i
			}
		]);

		inputEl.current.value = '';
		inputEl.current.focus();
	};

	const deleteTodo = id => {
		setTodos(todos => todos.filter(el => el.id !== id));
	};

	const handleInput = ({ target: { value } }) => {
		setTodoText(value);
	};

	return (
		<div>
			<form action='#' onSubmit={addTodo}>
				<input ref={inputEl} type='text' onChange={handleInput} />
				<button>Add todo</button>
			</form>
			<ul>
				{todos.map(({ text, id }) => (
					<Todo text={text} id={id} key={id} deleteTodo={deleteTodo} />
				))}
			</ul>
		</div>
	);
};
