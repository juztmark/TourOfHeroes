import { UserType } from './userType';
import { User } from './user';

export const users: User[] = [
  { name: 'user', password: 'user', userType: UserType.User },
  { name: 'admin', password: 'admin', userType: UserType.Admin },
];
