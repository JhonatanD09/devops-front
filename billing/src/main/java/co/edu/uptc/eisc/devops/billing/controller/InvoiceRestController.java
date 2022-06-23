package co.edu.uptc.eisc.devops.billing.controller;

import co.edu.uptc.eisc.devops.billing.entities.Invoice;
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
import co.edu.uptc.eisc.devops.billing.respository.InvoiceRepository;

@RestController
@CrossOrigin
@RequestMapping("/billing")
public class InvoiceRestController {
    
    @Autowired
    InvoiceRepository customerRepository;
    
    @GetMapping()
    public List<Invoice> list() {
        return customerRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Optional<Invoice> get(@PathVariable String id) {
        return customerRepository.findById(Long.parseLong(id));
    }
    
    @PutMapping("/{id}")
    public Optional<Object> put(@PathVariable String id, @RequestBody Invoice input) {
        return customerRepository.findById(Long.parseLong(id))
        		.map(invoice ->{
        			invoice.setAmount(input.getAmount());
        			invoice.setCustomerId(input.getCustomerId());
        			invoice.setDetail(input.getDetail());
        			invoice.setNumber(input.getNumber());
        			return customerRepository.save(invoice);
        		});
    }
    
    @PostMapping
    public ResponseEntity<?> post(@RequestBody Invoice input) {
        Invoice save = customerRepository.save(input);
        return ResponseEntity.ok(save);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable String id) {
        customerRepository.deleteById(Long.parseLong(id));
    	return ResponseEntity.ok(200);
    }
    
}
