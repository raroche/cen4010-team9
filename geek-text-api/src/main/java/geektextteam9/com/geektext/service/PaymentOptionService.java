package geektextteam9.com.geektext.service;

import geektextteam9.com.geektext.model.PaymentOption;
import geektextteam9.com.geektext.model.User;
import geektextteam9.com.geektext.repository.PaymentOptionRepository;
import geektextteam9.com.geektext.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentOptionService {

    @Autowired
    PaymentOptionRepository paymentOptionRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserService userService;

    public void createPaymentOption(Integer id, PaymentOption paymentOption){
        userRepository.findById(id).map(user -> {
            user.addPaymentOption(paymentOption);
            return paymentOptionRepository.save(paymentOption);
        });                                                         //throw exception
    }

    public List<PaymentOption> getAllPaymentOptions(){
        return paymentOptionRepository.findAll();
    }

    public List<PaymentOption> getPaymentOptionsByUser(User user){
        return user.getHasPaymentOptions();
    }

    public Optional<PaymentOption> findPaymentOptionById(Integer id){
        return paymentOptionRepository.findById(id);
    }

    public void updatePaymentOption(Integer userId, Integer payId, PaymentOption paymentOption){
        userService.getAllUsers().stream().forEach(user -> {
            if(user.getId()==userId){
                user.getHasPaymentOptions().stream().forEach(paymentOption1 -> {
                    if(paymentOption1.getId()==payId){
                        user.updatePaymentOption(payId, paymentOption);
                        userRepository.save(user);
//                        paymentOption1.setCardNickname(paymentOption.getCardNickname());
//                        paymentOption1.setCardNumber(paymentOption.getCardNumber());
//                        paymentOption1.setCvv(paymentOption.getCvv());
                        //paymentOptionRepository.save(paymentOption);
                    }
                });
            }
        });
            //find payment option by id and update
            //paymentOptionRepository.save(paymentOption);
    }


    public void deletePaymentOption(Integer userId, Integer payId){
        userRepository.findById(userId).map(user -> {
            user.deletePaymentOptionById(payId);
            paymentOptionRepository.deleteById(payId);
            return 0;
        });
    }
}
