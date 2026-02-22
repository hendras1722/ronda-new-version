export interface GetMe {
  _id: string;
  email: string;
  role: string;
  idUser: string;
  createdAt: Date;
  __v: number;
  name: string;
  phone: string;
  idBlock: string;
  updatedAt: Date;
  ronda: Ronda;
  block: Block;
}

export interface Block {
  _id: string;
  name: string;
  idBlock: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Ronda {
  _id: string;
  idUser: string;
  days: string;
  idRonda: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
