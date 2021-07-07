import React from 'react';
import { useEffect, useState } from 'react';

import { getTodos } from '../../api/api';
import { TodoList } from '../TodosList';
import './Todos.scss';

export type Todo = {
  userId?: number;
  id: number;
  title?: string;
  completed?: boolean;
};

export const Todos: React.FC<JSX.Element[]> = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos()
      .then(setTodos)
  }, [])

  console.log(todos)

  return (
    <div className="container">
      <ul className="container_list">
        <TodoList todos={todos}/>
      </ul>
    </div>
  );
};
