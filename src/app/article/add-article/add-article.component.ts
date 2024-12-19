import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css',
})
export class AddArticleComponent {
  constructor(private apiService: ApiService) {}

  addArticle(form: NgForm) {
    console.log(form);
    if (form.invalid) {
      return;
    }

    console.log(form.value);

    // event.preventDefault();
    // this.apiService.createArticle(articlesName, postText).subscribe((data) => {
    //   console.log(data);
    // });
  }
}
