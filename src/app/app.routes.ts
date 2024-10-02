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
import { metricsGuard } from './services/metrics.guard';
import { QrSectionComponent } from './pages/qr-section/qr-section.component';
import { FinancingComponent } from './pages/financing/financing.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [metricsGuard] },
  { path: 'collections/:title', component: CollectionsComponent, canActivate: [metricsGuard] },
  { path: 'onstar', component: OnstarComponent, canActivate: [metricsGuard]  },
  { 
    path: 'products/:name', 
    component: ProductsComponent,
    canActivate: [metricsGuard],  
    children: [
      { path: 'images', component: ProductImgsComponent, canActivate: [metricsGuard] },
      { path: 'colors', component: ColorizerComponent, canActivate: [metricsGuard] },
      { path: 'specify', component: SpecsPopupComponent, canActivate: [metricsGuard] },
      { path: 'technical', component: TechnicalSheetComponent, canActivate: [metricsGuard] },
      { path: 'onstar', component: OnstarComponent, canActivate: [metricsGuard] },
      { path: 'compare', component: CompareProductComponent, canActivate: [metricsGuard] },
      { path: 'contact', component: ContactFormComponent, canActivate: [metricsGuard] },
      { path: 'qr', component: QrSectionComponent, canActivate: [metricsGuard] },
      { path: 'financing', component: FinancingComponent, canActivate: [metricsGuard] },
      { path: '', redirectTo: 'images', pathMatch: 'full' }
    ]
  },  
  { path: '**', redirectTo: 'home' } 
];

