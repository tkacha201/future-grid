import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css',
})
export class AddArticleComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  addArticle(form: NgForm) {
    console.log(form);
    if (form.invalid) {
      return;
    }

    const { articleName, postText } = form.value;
    this.apiService.createArticle(articleName, postText).subscribe(() => {
      this.router.navigate(['/articles']);
    });
  }
}
