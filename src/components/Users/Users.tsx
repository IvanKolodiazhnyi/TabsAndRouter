import React, {useState, useEffect } from "react";

import { getUSers } from "../../api/api";
import { UsersList } from "../UsersList";

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

export const Users:React.FC<JSX.Element[]> = () => {
  const [users, setUsers] = useState<UsersType[]>([]);

  useEffect(() => {
    getUSers()
      .then(setUsers)
  }, []);

  return (
    <ul>
      <UsersList users={users}/>
    </ul>
  );
};
