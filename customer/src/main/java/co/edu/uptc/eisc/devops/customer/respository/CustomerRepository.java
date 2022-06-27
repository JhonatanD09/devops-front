package co.edu.uptc.eisc.devops.customer.respository;

import co.edu.uptc.eisc.devops.customer.entities.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepository extends MongoRepository<Customer, String> {
    
}
