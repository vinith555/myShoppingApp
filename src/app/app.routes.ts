import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: '', component: HomeComponent },
];
