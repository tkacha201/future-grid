import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Article } from '../../types/article';
import { UserService } from '../../user/user.service';
import { HomeComponent } from '../../home/home.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-current-article',
  imports: [HomeComponent, DatePipe],
  templateUrl: './current-article.component.html',
  styleUrl: './current-article.component.css',
})
export class CurrentArticleComponent implements OnInit {
  article = {} as Article;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private userService: UserService
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get username(): string {
    return this.userService.user?.username || '';
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['articleId'];

    this.apiService.getSingleArticle(id).subscribe((article) => {
      this.article = article;
    });
  }
}
