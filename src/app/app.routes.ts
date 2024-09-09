import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { OnstarComponent } from './pages/onstar/onstar.component';
import { ProductsComponent } from './pages/products/products.component';
import { ColorizerComponent } from './components/colorizer/colorizer.component';
import { ProductImgsComponent } from './components/product-imgs/product-imgs.component'
import { CompareProductComponent } from './pages/compare-product/compare-product.component';
import { SpecsPopupComponent } from './components/specs-popup/specs-popup.component';
import { TechnicalSheetComponent } from './pages/technical-sheet/technical-sheet.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'collections/:title', component: CollectionsComponent },
  { path: 'onstar', component: OnstarComponent },
  { 
    path: 'products/:name', 
    component: ProductsComponent,
    children: [
      { path: 'colors', component: ColorizerComponent },
      { path: 'images', component: ProductImgsComponent }, 
      { path: 'specify', component: SpecsPopupComponent },
      { path: 'technical', component: TechnicalSheetComponent },
      { path: 'onstar', component: OnstarComponent },
      { path: 'compare', component: CompareProductComponent },
      { path: 'contact', component: ContactFormComponent },
    { path: '', redirectTo: 'images', pathMatch: 'full' } 
    ]
  },  
  { path: '**', redirectTo: 'home' } 
];

