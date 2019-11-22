package geektextteam9.com.geektext.model;


import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @NotBlank
    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String email;

    @Column(name = "username")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String username;

    @Column(name = "password")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String password;

    @Column(name = "nickname")
    private String nickname;


    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Review> reviews;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "user_wishlist",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "wishlist_id", referencedColumnName = "id"))
    @JsonManagedReference
    private List<Wishlist> wishlists;

    public User(@JsonProperty("first_name") String firstName,
                @JsonProperty("last_name") String lastName,
                @JsonProperty("email") String email,
                @JsonProperty("username") String username,
                @JsonProperty("password") String password,
                @JsonProperty("nickname") String nickname,
                List<Review> reviews,
                List<Wishlist> wishlists)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.nickname = nickname;
        this.reviews = reviews;
        this.wishlists = wishlists;
    }

    public User(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = null;
        this.username = null;
        this.password = null;
        this.nickname = null;
    }

    public User(){
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.username = null;
        this.password = null;
        this.nickname = null;
    }

    public Integer getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getFirstName(){
        return firstName;
    }

    public void setFirstName(String firstName){
        this.firstName = firstName;
    }

    public String getLastName(){
        return lastName;
    }

    public void setLastName(String lastName){
        this.lastName = lastName;
    }

//    public String getName(){
//        return firstName + " " + lastName;
//    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getUsername(){
        return username;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String getNickname(){
        return nickname;
    }

    public void setNickname(String nickname){
        this.nickname = nickname;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public List<Wishlist> getWishlists() {
        return wishlists;
    }

    public void setWishlists(List<Wishlist> wishlists) {
        this.wishlists = wishlists;
    }
}

