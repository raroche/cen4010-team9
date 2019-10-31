package geektextteam9.com.geektext.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name="book")
public class Book_in_Wishlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Integer id;

    @Column
    private String title;

    @ManyToMany(mappedBy = "books_wishlist")
    @JsonManagedReference
    private List<Author> authors;

    @Column
    private Double price;

    @Column
    private String img_url;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "book_in_wishlist",
            joinColumns = @JoinColumn(name = "book_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "wishlist_id", referencedColumnName = "id"))
    @JsonBackReference
    private List<Wishlist> wishlist;

    public Book_in_Wishlist(String title, List<Author> authors, Double price, String img_url, List<Wishlist> wishlist) {
        this.title = title;
        this.authors = authors;
        this.price = price;
        this.img_url = img_url;
        this.wishlist = wishlist;
    }

    public Book_in_Wishlist() {
        this.title = null;
        this.authors = null;
        this.price = null;
        this.img_url = null;
        this.wishlist = null;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Author> getAuthors() {
        return authors;
    }

    public void setAuthors(List<Author> authors) {
        this.authors = authors;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }

    public List<Wishlist> getWishlist() {
        return wishlist;
    }

    public void setWishlist(List<Wishlist> wishlist) {
        this.wishlist = wishlist;
    }
}