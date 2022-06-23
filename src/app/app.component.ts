import { Component } from '@angular/core';
import { createCustomer,getAllCustomers, getCustomerById, updateCustomer,deleteCustomer} from 'src/services/customer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-devops';


  getCustomers(){
    console.log('get')
    getAllCustomers().then( async (req)=>{
      let data = await req.json()
      console.log(data)
    }
    )
  }

  deleteCustomer(){
    console.log('dlete')
    deleteCustomer('1')
  }

  updateCustomer(){
    console.log('update')
    updateCustomer('1',"Andres Editado", "3232409986")
  }

  getCustomerById(){
    console.log('get id 1')
    getCustomerById('1').then( async (req)=>{
      let data = await req.json()
      console.log(data)
    }
    )
  }

  createCustomer(){
    console.log('click')
    createCustomer('Danilo','12345')
  }
}
