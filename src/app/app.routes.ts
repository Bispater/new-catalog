import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { OnstarComponent } from './pages/onstar/onstar.component';
import { ProductsComponent } from './pages/products/products.component';
import { ColorizerComponent } from './components/colorizer/colorizer.component';
import { ProductImgsComponent } from './components/product-imgs/product-imgs.component'
import { CompareProductComponent } from './pages/compare-product/compare-product.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collections/:title', component: CollectionsComponent },
  { path: 'onstar', component: OnstarComponent },
  { 
    path: 'products/:name', 
    component: ProductsComponent,
    children: [
      { path: 'colors', component: ColorizerComponent },
      { path: 'images', component: ProductImgsComponent }, 
    //   { path: 'especificaciones', component: EspecificacionesComponent },
      { path: 'onstar', component: OnstarComponent },
      { path: 'compare', component: CompareProductComponent },
    { path: '', redirectTo: 'images', pathMatch: 'full' } 
    ]
  },  
];

