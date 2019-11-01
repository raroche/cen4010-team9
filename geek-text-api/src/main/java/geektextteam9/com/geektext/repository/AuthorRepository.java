package geektextteam9.com.geektext.repository;

import geektextteam9.com.geektext.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, Integer> {
}
