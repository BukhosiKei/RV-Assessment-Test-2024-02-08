import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'create-product', component: CreateProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
