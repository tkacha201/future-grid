import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './types/post';
import { Article } from './types/article';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts(limit?: number) {
    let url = `/api/posts`;
    if (limit) {
      url += `?limit=${limit}`;
    }

    return this.http.get<Post[]>(url);
  }

  getArticles() {
    return this.http.get<Article[]>(`/api/articles`);
  }

  getSingleArticle(id: string) {
    return this.http.get<Article>(`/api/articles/${id}`);
  }

  createArticle(articleName: string, postText: string) {
    const payload = { articleName, postText };
    return this.http.post<Article>(`/api/articles`, payload);
  }
}
