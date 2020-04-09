/**
 * Para a criação do usuário: name, email, password
 *
 * Devemos criar interfaces sempre que for necessário definir o formato de um objeto
 */

interface techObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | techObject>;
}

export default function createUser({
  name = '',
  email,
  password,
  techs,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs,
  };

  return user;
}
