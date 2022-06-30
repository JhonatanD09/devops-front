import { Component, Input, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { invoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-target-invoice',
  templateUrl: './target-invoice.component.html',
  styleUrls: ['./target-invoice.component.css']
})
export class TargetInvoiceComponent implements OnInit {

  @Input() invoice :any

  constructor(private modalService : SwitchService, public invoiceService:invoiceService) { }


  ngOnInit(): void {
  }

  deleteInvoice(e:Event){
    let btn = e.target as HTMLButtonElement
    let id = btn.id
    this.invoiceService.deleteInvoice(id)
  }
}
