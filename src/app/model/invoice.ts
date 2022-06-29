export interface Invoice {
  id:string,
  customerId:string,
  number:string,
  detail:string,
  amount:number
}

export interface SendInvoice extends Omit<Invoice,'id'>{}
