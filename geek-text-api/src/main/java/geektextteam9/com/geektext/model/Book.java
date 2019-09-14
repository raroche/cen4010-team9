package geektextteam9.com.geektext.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name= "book")
public class Book {
	

	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "book_seq_gen")
	@SequenceGenerator(name = "book_seq_gen", sequenceName = "book_id_seq")
	private Integer id;
	
	@Column(name="isbn")
	private String isbn;
	
	@Column(name="title")
	private String title;
	
	
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
	

}
