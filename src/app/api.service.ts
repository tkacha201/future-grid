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
  //CRUD

  // update -> http.put

  updateArticle(articleId: string, articleName: string, postText: string) {
    const payload = { articleName, postText };
    return this.http.put<Article>(`/api/article/${articleId}`, payload);
  }

  updatePost(articleId: string, postId: string) {
    const payload = {};
    return this.http.put<Article>(
      `/api/articles/${articleId}/posts/${postId}`,
      payload
    );
  }

  //delete -> htto.delete article ID
  deletePost(articleId: string, postId: string) {
    return this.http.delete(`/api/themes/${articleId}/post/${postId}`);
  }
}
