import { Component } from '@angular/core';
import { CustomerService } from './services/customer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-devops';

  constructor(public customerService:CustomerService){}


  deleteCustomer(){
    
    this.customerService.deleteCustomer('1')
  }

  updateCustomer(){
    console.log('update')
    this.customerService.updateCustomer('1',"Andres Editado", "3232409986")
  }

  getCustomerById(){
    console.log('get id 1')
    let data=this.customerService.getCustomerById('1');
    console.log(data)
  }

  createCustomer(){
    console.log('click')
    this.customerService.createCustomer('Danilo','12345')
  }
}
