import{Routes} from '@angular/router'
import { HomeComponent } from '../page/home/home.component';
import { AboutComponent } from '../page/about/about.component';
import { ProductsComponent } from '../page/products/products.component';
import { ContactComponent } from '../page/contact/contact.component';
import {AdoptionformComponent} from "../page/adoptionform/adoptionform.component";

export const appRoutes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: AdoptionformComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
]


