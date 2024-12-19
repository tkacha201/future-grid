import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { MainComponent } from './main/main.component';
import { CurrentArticleComponent } from './article/current-article/current-article.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'articles',
    children: [
      { path: '', component: MainComponent },
      {
        path: ':articleId',
        component: CurrentArticleComponent,
        // canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'add-article',
    component: AddArticleComponent,
    canActivate: [AuthGuard],
  },

  { path: 'profile', component: ProfileComponent },

  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
