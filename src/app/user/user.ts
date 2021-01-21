import { UserType } from './userType';

export interface User {
  name: string;
  password: string;
  userType: UserType;
}
