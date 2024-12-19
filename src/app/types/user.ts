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
  tel?: string;
  password: string;
  id: string;
}

export interface ProfileDetails {
  username: string;
  email: string;
  tel: string;
}
