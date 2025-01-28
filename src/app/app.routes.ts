import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';

export const routes: Routes = [
  // First Match Wins
  { path: '', pathMatch:'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutUsComponent, children: [
    {path:'', pathMatch:'full', redirectTo: 'vision'},
    {path:'vision', component: VisionComponent},
    {path:'values', component: ValuesComponent},
  ] },
  { path: '**', component: NotFoundComponent },
];
