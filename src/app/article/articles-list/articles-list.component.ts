import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Article } from '../../types/article';
import { LoaderComponent } from '../../animations/loader/loader.component';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-articles-list',
  imports: [LoaderComponent, RouterLink, DatePipe],
  standalone: true,
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css',
})
export class ArticlesListComponent implements OnInit {
  articles: Article[] = [];

  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getArticles().subscribe((articles) => {
      this.articles = articles;
      this.isLoading = false;

      console.log({ articles });
    });
  }
}
