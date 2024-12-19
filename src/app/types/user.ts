export interface User {
  articles: string[];
  posts: string[];
  _id: string;
  tel: string;
  email: string;
  username: string;
  password: string;
  created_at: string;
  updatedAt: string;
  __v: number;
}

export interface UserForAuth {
  username: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  password: string;
  id: string;
}

export interface ProfileDetails {
  userName: string;
  email: string;
  tel: string;
}
