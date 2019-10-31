package geektextteam9.com.geektext.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="users")
public class User_Wishlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Integer id;

    @ManyToMany(mappedBy = "user")
    @JsonManagedReference
    private List<Wishlist> wishlists;

    public User_Wishlist(List<Wishlist> wishlists) {
        this.wishlists = wishlists;
    }

    public User_Wishlist() {
        this.wishlists = null;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<Wishlist> getWishlists() {
        return wishlists;
    }

    public void setWishlists(List<Wishlist> wishlists) {
        this.wishlists = wishlists;
    }
}
