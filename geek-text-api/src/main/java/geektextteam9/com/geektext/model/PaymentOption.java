package geektextteam9.com.geektext.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "payment_method")
public class PaymentOption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "card_nickname")
    private String cardNickname;
    @Column(name = "card_number")
    private Long cardNumber;
    @Column(name = "expiration")
    private String expiration;
    @Column(name = "cvv")
    private int cvv;

    public PaymentOption(String cardNickname, Long cardNumber, int exp_month, int exp_year, int cvv){
        this.cardNickname = cardNickname;
        this.cardNumber = cardNumber;
        this.expiration = exp_month + "/" + exp_year;
        this.cvv = cvv;
    }

    public Integer getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getCardNickname(){
        return cardNickname;
    }

    public void setCardNickname(String cardNickname){
        this.cardNickname = cardNickname;
    }

    public Long getCardNumber(){
        return cardNumber;
    }

    public void setCardNumber(Long cardNumber){
        this.cardNumber = cardNumber;
    }

    public String getExpiration(){
        return expiration;
    }

    public void setExpiration(int exp_month, int exp_year){
        this.expiration = exp_month + "/" + exp_year;
    }

    public int getCvv(){
        return cvv;
    }

    public void setCvv(int cvv){
        this.cvv = cvv;
    }

}
