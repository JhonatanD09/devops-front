export interface Customer {
    id:number,
    name:string,
    phone:string
}

export interface SendCustomer extends Omit<Customer,'id'>{}
