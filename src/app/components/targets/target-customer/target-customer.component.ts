import { Component, OnInit, Input } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { deleteCustomer } from 'src/services/customer';


@Component({
  selector: 'app-target-customer',
  templateUrl: './target-customer.component.html',
  styleUrls: ['./target-customer.component.css']
})


export class TargetCustomerComponent implements OnInit {

  @Input()customer:any ;

  constructor(private modalService : SwitchService) { }

  ngOnInit(): void {
  }

  delete(e:Event){
    let btn = e.target as HTMLButtonElement
    let id = btn.id
    this.modalService.$modal.emit(false)
    deleteCustomer(id)
  }
}
