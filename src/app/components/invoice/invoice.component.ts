import { Component, OnInit } from '@angular/core';
import { invoiceService } from 'src/app/services/invoice.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  modalSwitch: boolean = false

  constructor(private modalService : SwitchService ,public invoiceServ:invoiceService) { }

  ngOnInit(): void {
    this.invoiceServ.getAllInvoices()
    this.modalService.$modal.subscribe((value)=>{
      this.modalSwitch = value
    })
  }

  openModal(){
    this.modalSwitch = true
  }
}
