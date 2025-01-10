import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'About', component: AboutUsComponent },
];
