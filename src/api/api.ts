import { Todo } from '../components/Todos/';
import { UsersType } from '../components/Users';

const BASE_URL: string = "http://jsonplaceholder.typicode.com";

const request = (url: string) => {
  return fetch((`${BASE_URL}${url}`))
    .then(response => response.json())
};

export function getTodos(): Promise<Todo[]> {
  return request('/todos');
};

export function getUSers(): Promise<UsersType[]> {
  return request('/users')
};
