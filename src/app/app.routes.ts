import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  // First Match Wins
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '**', component: NotFoundComponent },
];
