import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { getAllCustomers, deleteCustomer } from 'src/services/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  dataCustomers = []
  modalSwitch:boolean=false;

  constructor(private modalService : SwitchService) { }

  ngOnInit(): void {
    this.getCustomers()
    this.modalService.$modal.subscribe((value) => {this.modalSwitch = value
    if(value == false){
      console.log("consulta...")
      this.getCustomers()
    }
    })
  }

  getCustomers(){
    getAllCustomers().then(async (req) =>{
      console.log("aqui entra")
      this.dataCustomers = await req.json()
    })
  }
  openModal(){
    this.modalSwitch = true
  }

  deleteCustomer(){
    console.log('dlete')
    deleteCustomer('12')
  }
}
