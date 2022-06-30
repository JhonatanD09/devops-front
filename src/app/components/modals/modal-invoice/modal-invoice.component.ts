import { Component, OnInit } from '@angular/core';
import { invoiceService } from 'src/app/services/invoice.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-modal-invoice',
  templateUrl: './modal-invoice.component.html',
  styleUrls: ['./modal-invoice.component.css']
})
export class ModalInvoiceComponent implements OnInit {

  idClient = ''
  number = ''
  description = ''
  amount = ''

  constructor(public switchModal :SwitchService, public invoiceService : invoiceService ) {}

  ngOnInit(): void {
  }

  closeModal(){
    this.switchModal.$modal.emit(false)
  }

  addInvoice(){
    this.invoiceService.createInvoice(this.idClient,this.number,this.description,Number(this.amount))
    this.closeModal()
  }
}
