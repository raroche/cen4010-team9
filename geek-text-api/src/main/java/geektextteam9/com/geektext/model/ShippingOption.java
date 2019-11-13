package geektextteam9.com.geektext.model;

import javax.persistence.*;

@Entity
@Table(name = "shipping_address")
public class ShippingOption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Integer id;
    @Column(name = "nickname")
    String shippingNickname;
    @Column(name = "address")
    String address;

    public ShippingOption(String shippingNickname, String address){
        this.shippingNickname = shippingNickname;
        this.address = address;
    }

    public Integer getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getShippingNickname(){
        return shippingNickname;
    }

    public void setShippingNickname(String shippingNickname){
        this.shippingNickname = shippingNickname;
    }

    public String getAddress(){
        return address;
    }

    public void setAddress(String address){
        this.address = address;
    }

}
