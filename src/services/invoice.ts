const BASE_URL= 'http://localhost:8081/billing'

export const getAllInvoices = () =>{
  const requestOptions= {
    method : 'GET',
    headers: { "Content-Type": "application/json" },
  }
  return fetch(BASE_URL, requestOptions)
}

export const getInvoiceById = (id:string) =>{
  const requestOptions = {
    method: 'GET',
    headers: { "Content-Type": "application/json" },
  }
  return fetch(BASE_URL+ `/${id}`,requestOptions)
}

export const addInvoice = (
    customerId:number,
    number:number,
    detail:string,
    amount:number
) =>{
  const requestOptions = {
    method : 'POST',
    headers: { "Content-Type": "application/json" },
    body : JSON.stringify({
      customerId : customerId,
      number : number,
      detail : detail,
      amount : amount
    })
  }
  return fetch(BASE_URL, requestOptions)
}

export const editInvoice = (
    id:string,
    customerId:number,
    number:number,
    detail:string,
    amount:number
) =>{
  const requestOptions = {
    method : 'PUT',
    headers: { "Content-Type": "application/json" },
    body : JSON.stringify({
      customerId : customerId,
      number : number,
      detail : detail,
      amount : amount
    })
  }
  return fetch(BASE_URL+`/${id}`,requestOptions)
}

export const deletInvice = (id:string) =>{
  const requestOptions = {
    method: 'DELETE',
    headers: { "Content-Type": "application/json" },
  }
  return fetch(BASE_URL+`/${id}`, requestOptions)
}
