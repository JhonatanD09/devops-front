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
    })
  }

  openModal(){
    this.modalSwitch = true
  }

  deleteCustomer(){
    this.customerService.deleteCustomer('12')
  }
}
