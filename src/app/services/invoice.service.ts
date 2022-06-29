import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Invoice, SendInvoice } from '../model/invoice';
@Injectable({
  providedIn: 'root'
})

export class invoiceService {

  public invoices:Invoice[]=[];
  BASE_URL:string = 'http://localhost:8081/billing';

  constructor(private http:HttpClient) { }

  createInvoice(customerId:string, number:string, detail:string, amount:number){
    let data: SendInvoice = {
      customerId,
      number,
      detail,
      amount
    }
    this.http.post(this.BASE_URL,data)
    .subscribe(()=>{
      this.getAllInvoices()
    })
  }

  updateInvoice(id:string,customerId:string, number:string, detail:string, amount:number){
    let data: SendInvoice = {
      customerId,
      number,
      detail,
      amount
    }
    this.http.put(this.BASE_URL+`/${id}`,data)
    .subscribe(()=>{
      this.getAllInvoices()
    })
  }


  getInvoiceById(id:string){
    this.http.get<Invoice>(this.BASE_URL+`/${id}`)
    .subscribe((data)=>{
      return data
    })
  }

  getAllInvoices(){
    this.http.get<Invoice[]>(this.BASE_URL)
    .subscribe((data)=>{
      this.invoices = data
    })
  }

  deleteInvoice(id:string){
    this.http.delete(this.BASE_URL+`/${id}`)
    .subscribe(()=>{
      this.getAllInvoices()
    })
  }
}
