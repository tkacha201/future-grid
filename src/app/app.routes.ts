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
import { ErrorMsgComponent } from './core/error-msg/error-msg.component';

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
    //lazy loading
    path: 'add-article',
    loadComponent: () =>
      import('./article/add-article/add-article.component').then(
        (c) => c.AddArticleComponent
      ),
    canActivate: [AuthGuard],
  },

  { path: 'profile', component: ProfileComponent },

  { path: 'error', component: ErrorMsgComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
