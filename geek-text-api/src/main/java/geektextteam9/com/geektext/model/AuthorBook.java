package geektextteam9.com.geektext.model;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class AuthorBook {

    @EmbeddedId
    private AuthorBookId id;

    @Embeddable
    public static class AuthorBookId implements Serializable {

        @Fetch(value = FetchMode.SELECT)
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "author_id")
        private Author author;

        @Fetch(value = FetchMode.SELECT)
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "book_id")
        private Book book;


        public Author getAuthor() {
            return author;
        }

        public void setAuthor(Author author) {
            this.author = author;
        }

        public Book getBook() {
            return book;
        }

        public void setBook(Book book) {
            this.book = book;
        }
    }

    public AuthorBook(AuthorBookId id) {
        this.id = id;
    }

    public AuthorBookId getId() {
        return id;
    }

    public void setId(AuthorBookId id) {
        this.id = id;
    }
}
