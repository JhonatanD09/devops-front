package co.edu.uptc.eisc.devops.billing.respository;

import co.edu.uptc.eisc.devops.billing.entities.Invoice;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InvoiceRepository extends MongoRepository<Invoice, String> {
    
}
