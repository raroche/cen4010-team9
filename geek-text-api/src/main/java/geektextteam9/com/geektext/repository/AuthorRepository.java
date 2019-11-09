package geektextteam9.com.geektext.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import geektextteam9.com.geektext.model.Author;

public interface AuthorRepository extends JpaRepository<Author, Integer> {

	public Page<Author> findByBooksIdBookId(Integer bookId, Pageable pageable);
}
