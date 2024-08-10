import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollectionsComponent } from './pages/collections/collections.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'collections/:title', component: CollectionsComponent },

];

