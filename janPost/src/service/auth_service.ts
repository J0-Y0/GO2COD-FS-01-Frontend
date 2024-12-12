import React from 'react'
import create from './http_service';
 import { CanceledError } from "axios";
export {CanceledError}


export interface Token {
  access: string;
  refresh: string,
}
export interface User {
  user_id?: string;
  first_name?: string,
  last_name?: string,
}


export interface SignupField {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
}
export interface LoginField {
  
  email: string,
  password: string,
}
export interface Message{
  content: string,
  severity:'error'|'info'|'success'|'warning'
}


export default  create("auth/users/");

export const createJwt = create("auth/jwt/create")
export const activateAcc = create("auth/users/activation/")




