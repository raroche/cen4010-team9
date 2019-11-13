package geektextteam9.com.geektext.service;

import geektextteam9.com.geektext.model.PaymentOption;
import geektextteam9.com.geektext.repository.PaymentOptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentOptionService {

    @Autowired
    PaymentOptionRepository paymentOptionRepository;

    public void createPaymentOption(PaymentOption paymentOption){
        paymentOptionRepository.save(paymentOption);
    }

    public List<PaymentOption> getAllPaymentOptions(){
        return paymentOptionRepository.findAll();
    }

    public Optional<PaymentOption> findPaymentOptionById(Integer id){
        return paymentOptionRepository.findById(id);
    }

    public void updatePaymentOption(PaymentOption paymentOption){

    }

    public void deletePaymentOption(Integer id){
        paymentOptionRepository.deleteById(id);
    }
}
