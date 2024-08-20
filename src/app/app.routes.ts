import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { OnstarComponent } from './pages/onstar/onstar.component';
import { ProductsComponent } from './pages/products/products.component';
import { ColorizerComponent } from './components/colorizer/colorizer.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'collections/:title', component: CollectionsComponent },
    { path: 'onstar', component: OnstarComponent },
    { path: 'products/:name', component: ProductsComponent },
    { path: 'colors', component: ColorizerComponent },

];

