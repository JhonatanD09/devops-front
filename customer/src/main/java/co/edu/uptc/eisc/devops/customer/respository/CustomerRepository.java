package co.edu.uptc.eisc.devops.customer.respository;

import co.edu.uptc.eisc.devops.customer.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    
}
