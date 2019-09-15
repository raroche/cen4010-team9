package geektextteam9.com.geektext.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import geektextteam9.com.geektext.model.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {

	public Book findByIsbn(String isbn);

}
