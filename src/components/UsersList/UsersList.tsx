import React from "react";
import { useState } from "react";

import { UsersType } from '../Users';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

type Props = {
  users: UsersType[];
  selectedUserId: number;
};

export const UsersList: React.FC<Props> = ({
    users,
    selectedUserId,
  }) => {
  const [searchUsers, setSearchUsers] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const [userSelect, setUserSelect] = useState(false);

  const visibleUsers = users.filter(el => {
    const filterUserBySelect = userSelect ? (
      selectedUserId === el.id) : ( el );

    const filterByName = el.name.toLocaleLowerCase().includes(searchUsers.toLocaleLowerCase());

    const filterByUsername = el.username.toLocaleLowerCase().includes(searchUsers.toLocaleLowerCase());

    const filterByCity = el.address.city.toLocaleLowerCase().includes(citySearch.toLocaleLowerCase());

    return (filterByName || filterByUsername) && 
      (filterByCity) && (filterUserBySelect);
  })

  // const toMain = (userId, urlId) => {
  //   return;
  // }

  return (
    <>
      <div className="search">
        <div className="search_user">
          <label htmlFor="user" className="search_label">
            Find a users:
          </label>
          <input
              type="text"
              id="user"
              value={searchUsers}
              placeholder="Search user"
              onChange={({target}) => setSearchUsers(target.value)}
              className="search_input"
            />
        </div>

        <div className="search_city">
          <label htmlFor="city" className="search_label">
            Find a user city:
          </label>
          <input
              type="text"
              id="city"
              value={citySearch}
              placeholder="Search city"
              onChange={({target}) => setCitySearch(target.value)}
              className="search_input"
            />
        </div>

        <label htmlFor="checkbox">
          Show only selected user
          <input
            type="checkbox"
            id="checkbox"
            checked={userSelect}
            onChange={({ target }) => {
              setUserSelect(target.checked);
            }}
          />
        </label>
      </div>

      {visibleUsers.map(el => (
        <div
          className="users_container"
          key={el.id}
        >
          <li className="users_item">
            <p>Name: {el.name}</p>
            <p>Username: {el.username}</p>
            <p>Email: {el.email}</p>
            <p>City: {el.address.city}</p>
          </li>

          {selectedUserId === el.id ? (
            <Link
              className="users_button"
              type="button"
              to={`/users`}
            >
              <AiFillEye
                size={'2em'}
                color={'blue'}
              />
            </Link>
          ) : (
            <Link
              className="users_button"
              type="button"
              to={`/users/${el.id}`}
            >
              <AiFillEyeInvisible
                size={'2em'}
                color={'red'}
              />
            </Link>
          )}
        </div>
      ))}
    </>
  );
};
