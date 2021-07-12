import React, {useState, useEffect } from "react";

import { getUSers } from "../../api/api";
import { UsersList } from "../UsersList";
import { RouteComponentProps } from "react-router-dom";
import { useHistory, useRouteMatch } from 'react-router-dom';

import './Users.scss';

export type UsersType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
};

type Props = {
  userId: string;
}

export const Users = ({ match }: RouteComponentProps<Props>) => {
  const [users, setUsers] = useState<UsersType[]>([]);
  const userId: number = +match.params.userId || 0;
  const history = useHistory();
  const match1 = useRouteMatch();

  console.log(history);
  console.log(match1);

  useEffect(() => {
    getUSers()
      .then(setUsers)
  }, []);

  return (
    <ul className="users">
      <UsersList
        users={users}
        selectedUserId={userId}
      />
    </ul>
  );
};
