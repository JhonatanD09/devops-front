package co.edu.uptc.eisc.devops.billing.respository;

import co.edu.uptc.eisc.devops.billing.entities.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
    
}
