import { Request, Response } from 'express';
import CreateUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = CreateUser({
    name: 'Joao',
    email: 'victorfarias.new@gmail.com',
    password: '123',
    techs: [
      'nodejs',
      'reactjs',
      'react-native',
      { title: 'Javascript', experience: 100 },
    ],
  });
  return response.json({ response: user });
}
