import { Post } from './post';
import { User } from './user';

export interface Article {
  subscribers: string[];
  posts: Post[];
  _id: string;
  articleName: string;
  userId: User;
  created_at: string;
  updatedAt: string;
  __v: number;
}
