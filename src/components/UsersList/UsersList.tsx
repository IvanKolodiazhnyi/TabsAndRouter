import React from "react";

import { UsersType } from '../Users';

type Props = {
  users: UsersType[];
};

export const UsersList: React.FC<Props> = ({ users }) => {

  return (
    <>
      {users.map(el => (
        <li key={el.id}>
          {el.name}
        </li>
      ))}
    </>
  );
};
