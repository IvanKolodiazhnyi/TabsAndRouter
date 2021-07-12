import React from 'react';

import Loader from "react-loader-spinner";
import { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { getUSers } from '../../api/api';
import { UsersType } from '../Users';

export const HomePage:React.FC = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const userId = +match.params;

  const [user, setUser] = useState<UsersType[]>([]);

  useEffect(() => {
    getUSers()
      .then(result => (
        setUser(result.filter(el => el.id === userId))))
      .catch(() => {
        history.push('');
      })
  }, [userId]);

  if(user.length === 0) {
    return <Loader
        type="MutatingDots"
        color="blue"
        height={100}
        width={100}
     />
  } else {
    return (
      <div className="">
        <h1>Home page</h1>
  
        <div className="card_container">
          <h2 className="card_title">
            {`${user[0].name} ${user[0].username}`}
          </h2>
          <p>{user[0].email}</p>
        </div>
      </div>
    )
  }
}
