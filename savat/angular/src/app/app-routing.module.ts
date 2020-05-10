import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ProductsComponent} from './components/products/products.component';
import {SignInComponent} from './components/login/sign-in/sign-in.component';
import {SignUpComponent} from './components/login/sign-up/sign-up.component';
import {AddProductComponent} from './components/admin/add-product/add-product.component';
import {OrdersComponent} from './components/admin/orders/orders.component';
import {FeedbackListComponent} from './components/admin/feedback-list/feedback-list.component';
import {CustomersComponent} from './components/admin/customers/customers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'feedback-list',
    component: FeedbackListComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
