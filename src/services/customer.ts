const BASE_URL = 'http://localhost:8080/customer'

export const createCustomer = (name: string, phone: string) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      phone: phone
    }),
  };
  return fetch(BASE_URL, requestOptions);
}

export const updateCustomer = (id:string, name: string, phone: string) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      phone: phone
    }),
  };
  return fetch(BASE_URL+`/${id}`, requestOptions);
}


export const getAllCustomers = () => {
  const requestOptions = {
    method:'GET',
    headers: { "Content-Type": "application/json" }
  }
  return fetch(BASE_URL, requestOptions)
}

export const getCustomerById = (id:string) => {
  const requestOptions = {
    method:'GET',
    headers: { "Content-Type": "application/json" }
  }
  return fetch(BASE_URL+`/${id}`, requestOptions)
}

export const deleteCustomer = (id:string) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json"},
  };
  return fetch(BASE_URL+`/${id}`, requestOptions)
}


