package geektextteam9.com.geektext.model;

import com.fasterxml.jackson.annotation.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class AuthorBook implements Serializable {

    @Id
    @ManyToOne
    private Book book;

    @Id
    @ManyToOne
    private Author author;

    public AuthorBook() {

    }

    public AuthorBook(Book book, Author author) {
        this.book = book;
        this.author = author;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }
}

