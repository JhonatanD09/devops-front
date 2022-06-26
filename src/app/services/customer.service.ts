import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer, SendCustomer} from '../model/customer'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public customers:Customer[]=[];

  BASE_URL:string = 'http://localhost:8080/customer';

  constructor(private http:HttpClient) { }

  createCustomer(name: string, phone: string) {
    let data:SendCustomer={
      name,
      phone
    };
    this.http.post(this.BASE_URL, data)
    .subscribe(()=>{
      this.getAllCustomers();
    });
  }

  updateCustomer(id:string, name: string, phone: string) {
    let data:SendCustomer={
      name,
      phone
    };
    this.http.put(this.BASE_URL+`/${id}`, data)
    .subscribe(()=>{
      this.getAllCustomers();
    });
  }


  getAllCustomers () {
    /*
    const requestOptions = {
      method:'GET',
      headers: { "Content-Type": "application/json" }
    }
    */
    this.http.get<Customer[]>(this.BASE_URL)
    .subscribe(data=>{
      this.customers=data
    })
  }

  getCustomerById (id:string) {
    this.http.get<Customer>(this.BASE_URL+`/${id}`)
    .subscribe((data)=>{
      return data;
    })
  }

  deleteCustomer = (id:string) => {
    this.http.delete(this.BASE_URL+`/${id}`)
    .subscribe(()=>{

    })
  }

}
