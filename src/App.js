import React from 'react';
import Todos from './components/Todos';
import apiTodos from './todos';

export default () => <Todos apiTodos={apiTodos} />;
