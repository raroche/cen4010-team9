package geektextteam9.com.geektext.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "review")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Integer id;

    @Column
    private Double rating;

    @Column
    private String comment;

    @ManyToOne
    @JoinColumn(name="book_id")
    @JsonBackReference
    private Book book;

    private Review() {
        this.rating = 0.0;
        this.comment = "";
        this.book = null;
    }

    private Review(double rating, String comment, Book book) {
        this.rating = rating;
        this.comment = comment;
        this.book = book;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
}
