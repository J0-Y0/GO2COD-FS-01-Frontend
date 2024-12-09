import React from 'react'
import create from './http_service';
 import { CanceledError } from "axios";
export {CanceledError}



export interface User {
    id: number;
  first_name: string,
  last_name: string,
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



export default create("auth/users/");



