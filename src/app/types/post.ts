import { Article } from './article';
import { User } from './user';

export interface Post {
  likes: string[];
  _id: string;
  text: string;
  userId: User;
  articleId: Article;
  created_at: string;
  updatedAt: string;
  __v: number;
}
