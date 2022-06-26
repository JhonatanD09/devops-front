import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-modal-customer',
  templateUrl: './modal-customer.component.html',
  styleUrls: ['./modal-customer.component.css']
})

export class ModalCustomerComponent implements OnInit {

  name=''
  phone = ''


  constructor(private modalService : SwitchService, public customerService:CustomerService) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalService.$modal.emit(false)
  }

  submitData(){
    this.customerService.createCustomer(this.name,this.phone)
    this.closeModal()
  }
}
