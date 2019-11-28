package geektextteam9.com.geektext.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import geektextteam9.com.geektext.model.Book;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Integer> {

	public Book findByIsbn(String isbn);

	public Book findByDescription(String description);

	@Query(value = "select * from book WHERE top_seller = true", nativeQuery = true)
	public List<Book> findAllTopSellers();

	@Query(value = "select * from book WHERE genre_id = 1", nativeQuery = true)
	public List<Book> findProgramming();

	@Query(value = "select * from book WHERE genre_id = 2", nativeQuery = true)
	public List<Book> findRobotics();

	@Query(value = "select * from book WHERE genre_id = 3", nativeQuery = true)
	public List<Book> findNetwork();

	@Query(value = "select * from book WHERE genre_id = 4", nativeQuery = true)
	public List<Book> findAI();

	@Query(value = "select * from book WHERE rating >= 0", nativeQuery = true)
	public List<Book> getRating0();

	@Query(value = "select * from book WHERE rating >= 1", nativeQuery = true)
	public List<Book> getRating1();

	@Query(value = "select * from book WHERE rating >= 2", nativeQuery = true)
	public List<Book> getRating2();

	@Query(value = "select * from book WHERE rating >= 3", nativeQuery = true)
	public List<Book> getRating3();

	@Query(value = "select * from book WHERE rating >= 4", nativeQuery = true)
	public List<Book> getRating4();

	@Query(value = "select * from book WHERE rating = 5", nativeQuery = true)
	public List<Book> getRating5();





}
