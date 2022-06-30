import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { HeaderRoutesComponent } from './components/header-routes/header-routes.component';
import { TargetCustomerComponent } from './components/targets/target-customer/target-customer.component';
import { TargetInvoiceComponent } from './components/targets/target-invoice/target-invoice.component';
import { ModalCustomerComponent } from './components/modals/modal-customer/modal-customer.component';
import { FormsModule } from '@angular/forms';
import { ModalInvoiceComponent } from './components/modals/modal-invoice/modal-invoice.component';


const appRouter:Routes = [
  {path:'customer',component:CustomerComponent},
  {path:'invoice',component:InvoiceComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    InvoiceComponent,
    HeaderRoutesComponent,
    TargetCustomerComponent,
    TargetInvoiceComponent,
    ModalCustomerComponent,
    ModalInvoiceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRouter),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
