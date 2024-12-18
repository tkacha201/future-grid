import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './types/post';
import { Article } from './types/article';
import { environment } from '../dev.environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts(limit?: number) {
    const { apiUrl } = environment;

    let url = `${apiUrl}/posts`;
    if (limit) {
      url += `?limit=${limit}`;
    }

    return this.http.get<Post[]>(url);
  }

  getArticles() {
    const { apiUrl } = environment;
    return this.http.get<Article[]>(`${apiUrl}/articles`);
  }

  getSingleArticle(id: string) {
    const { apiUrl } = environment;

    return this.http.get<Article>(`${apiUrl}/articles/${id}`);
  }

  createArticle(articleName: string, postText: string) {
    const { apiUrl } = environment;
    const payload = { articleName, postText };
    return this.http.post<Article>(`${apiUrl}/articles`, payload);
  }
}
