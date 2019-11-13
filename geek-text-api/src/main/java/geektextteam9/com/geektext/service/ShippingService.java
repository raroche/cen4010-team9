package geektextteam9.com.geektext.service;

import geektextteam9.com.geektext.model.ShippingOption;
import geektextteam9.com.geektext.repository.ShippingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShippingService {

    @Autowired
    ShippingRepository shippingRepository;

    public void createShippingOption(ShippingOption shippingOption){
        shippingRepository.save(shippingOption);
    }

    public List<ShippingOption> getAllShippingOptions(){
        return shippingRepository.findAll();
    }

    public Optional<ShippingOption> findShippingOptionById(Integer id){
        return shippingRepository.findById(id);
    }

    public void updateShippingOption(ShippingOption shippingOption){

    }

    public void deleteShippingOption(Integer id){
        shippingRepository.deleteById(id);
    }

}
