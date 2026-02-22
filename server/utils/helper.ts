import jwt from "jsonwebtoken";
import type { Login } from "../models/login.schema";

import { getHeader, setResponseStatus, type H3Event } from 'h3'

export const generateToken = (user: Login) => {
  return jwt.sign({ id: user.idUser }, 'qwerty', {
    expiresIn: "10h",
  });
};

export const verifyToken = (token: string): { id: string; iat: number; exp: number } => {
  return jwt.verify(token, 'qwerty') as { id: string; iat: number; exp: number };
};

export const helperResponseSuccess = (message: string, data?: any) => {
  return {
    status: 200,
    message,
    data: data || undefined
  }
}

export const helperResponseError = (message: string, status?: number, data?: any) => {
  return {
    status: status || 500,
    message,
    data: data || undefined
  }
}

export const helperResponseUnauthorized = (event: H3Event) => {
  const token = getHeader(event, 'authorization')
  const getToken = token?.split('Bearer ')[1]

  if (!getToken) {
    setResponseStatus(event, 401)
    return {
      token: null,
      isValid: false
    }
  }

  return {
    token: getToken,
    isValid: true
  }
}