import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: '', component: HomeComponent },
    { path:'product',component:ProductComponent},
    { path:'product/:name/:id',component:ProductComponent},
    { path:'cart',component:CartComponent},
    // { path:'cart/',component:HomeComponent}
];
