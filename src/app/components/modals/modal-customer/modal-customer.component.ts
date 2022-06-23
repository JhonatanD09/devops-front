import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

import {getAllCustomers, createCustomer} from 'src/services/customer'

@Component({
  selector: 'app-modal-customer',
  templateUrl: './modal-customer.component.html',
  styleUrls: ['./modal-customer.component.css']
})

export class ModalCustomerComponent implements OnInit {

  name=''
  phone = ''


  constructor(private modalService : SwitchService) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalService.$modal.emit(false)
  }

  submitData(){
    createCustomer(this.name,this.phone)
    this.closeModal()
  }
}
