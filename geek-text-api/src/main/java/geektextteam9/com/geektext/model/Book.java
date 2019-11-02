package geektextteam9.com.geektext.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name="book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Integer id;

    @Column
    private String isbn;

    @Column
    private String title;

    @Column
    private String description;

    @Column
    private Double price;

    @Column
    private Date date;

    @Column
    private float rating;

    @Column
    private String img_url;

    @Column
    private boolean top_seller;

    @Column
    private boolean featured;

    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Review> reviews;

    @ManyToMany(mappedBy = "books")
    @JsonManagedReference
    private List<Author> authors;

    @ManyToMany(mappedBy = "books")
    @JsonManagedReference
    private List<Publisher> publishers;

    @ManyToMany(mappedBy = "books")
    @JsonBackReference
    private List<Wishlist> wishlist;

    public Book() {
        this.isbn = "";
        this.title = "";
        this.description = "";
        this.price = 0.0;
        this.date = null;
        this.rating = 0;
        this.img_url = "";
        this.top_seller = false;
        this.featured = false;
        this.reviews = null;
        this.authors = null;
        this.publishers = null;
        this.wishlist = null;
    }

    public Book(String isbn, String title, String description, Double price, Date date, float rating, String img_url, boolean top_seller, boolean featured, List<Review> reviews, List<Author> authors, List<Publisher> publishers, List<Wishlist> wishlist) {
        this.isbn = isbn;
        this.title = title;
        this.description = description;
        this.price = price;
        this.date = date;
        this.rating = rating;
        this.img_url = img_url;
        this.top_seller = top_seller;
        this.featured = featured;
        this.reviews = reviews;
        this.authors = authors;
        this.publishers = publishers;
        this.wishlist = wishlist;
    }

    public List<Author> getAuthors() {
        return authors;
    }

    public void setAuthors(List<Author> authors) {
        this.authors = authors;
    }

    public List<Publisher> getPublishers() {
        return publishers;
    }

    public void setPublishers(List<Publisher> publishers) {
        this.publishers = publishers;
    }

    public List<Review> getReviews() {
        return reviews;
    }


    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }

    public boolean isTop_seller() {
        return top_seller;
    }

    public void setTop_seller(boolean top_seller) {
        this.top_seller = top_seller;
    }

    public boolean isFeatured() {
        return featured;
    }

    public void setFeatured(boolean featured) {
        this.featured = featured;
    }



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription (String description) {
        this.description = description;
    }

    public List<Wishlist> getWishlist() {
        return wishlist;
    }

    public void setWishlist(List<Wishlist> wishlist) {
        this.wishlist = wishlist;
    }
}
