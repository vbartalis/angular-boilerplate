import { Routes } from '@angular/router';
import { P404Component } from './components/static/p404/p404.component';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { SignOutComponent } from './components/authentication/sign-out/sign-out.component';
import { P500Component } from './components/static/p500/p500.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  //   { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignOutComponent },
  { path: 'signout', component: SignOutComponent },
  { path: 'home', component: HomeComponent },
  { path: '500', component: P500Component, data: { title: '500 - Server error' } },
  { path: '404', component: P404Component, data: { title: '404 - Page not found' } }, // Wildcard route for a 404 page
  { path: '**', component: P404Component, data: { title: '404 - Page not found' } }, // Wildcard route for a 404 page
];
