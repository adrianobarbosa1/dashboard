export interface LoginData {
  username: string;
  password: string;
}

export interface User {
  _id: string;
  nome: string;
  username: string;
  password: string;
  email: string;
  permissao: string;
  acesso: boolean;
  dataCadastro: string;
  __v: number;
}
