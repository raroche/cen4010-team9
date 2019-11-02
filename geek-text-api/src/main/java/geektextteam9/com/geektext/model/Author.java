package geektextteam9.com.geektext.model;

import com.fasterxml.jackson.annotation.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "author")
public class Author {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Integer id;

    @Column
    private String name;

    @Column
    private String bio;

    @Column(name = "photo_url")
    private String photoUrl;

    @Fetch(FetchMode.SUBSELECT)
    @OneToMany(mappedBy = "author", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<AuthorBook> books;

    public Author() {
        this.name = "";
        this.bio = "";
        this.books = null;
        this.photoUrl = "";
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    public Author(String name, String bio, String photoUrl, Set<AuthorBook> books) {
        this.name = name;
        this.bio = bio;
        this.books = books;
        this.photoUrl = photoUrl;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public Set<AuthorBook> getBooks() {
        return books;
    }

    public void setBooks(Set<AuthorBook> books) {
        this.books = books;
    }
}
