import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  modalSwitch:boolean=false;

  constructor(private modalService : SwitchService, public customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers();
    this.modalService.$modal.subscribe((value) => {this.modalSwitch = value
    if(value == false){
      console.log("consulta...")
    }
    })
  }

  openModal(){
    this.modalSwitch = true
  }

  deleteCustomer(){
    console.log('dlete')
    this.customerService.deleteCustomer('12')
  }
}
