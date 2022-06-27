package co.edu.uptc.eisc.devops.customer.controller;

import co.edu.uptc.eisc.devops.customer.entities.Customer;
import co.edu.uptc.eisc.devops.customer.respository.CustomerRepository;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerRestController {
    
    @Autowired
    CustomerRepository customerRepository;
    
    @GetMapping()
    public List<Customer> list() {
        return customerRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Optional<Customer> get(@PathVariable String id) {
        return customerRepository.findById(id);
    }
    
    @PutMapping("/{id}")
    public Optional<Object> put(@PathVariable String id, @RequestBody Customer input) {
    	 return customerRepository.findById(id)
    		      .map(customer -> {    
    		    	  customer.setName(input.getName());
    		    	  customer.setPhone(input.getPhone());
    		        return customerRepository.save(customer);
    		      });
    }
    
    @PostMapping
    public ResponseEntity<?> post(@RequestBody Customer input) {
    	System.out.println("Agregando------------");
        Customer save = customerRepository.save(input);
        return ResponseEntity.ok(save);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable String id) {
    	System.out.println("eliminando");
         customerRepository.deleteById(id);
         return ResponseEntity.ok(200);    
       }
    
}
