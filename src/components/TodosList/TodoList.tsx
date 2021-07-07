import React from 'react';

import { Todo } from '../Todos';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {

  return (
    <>
      {todos.map(el => (
        <li key={el.id} className="container_item">
          {el.title}
        </li>
      ))}
    </>
  );
};
