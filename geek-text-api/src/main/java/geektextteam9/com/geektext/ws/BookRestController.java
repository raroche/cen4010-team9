package geektextteam9.com.geektext.ws;

import geektextteam9.com.geektext.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import geektextteam9.com.geektext.model.Book;
import geektextteam9.com.geektext.model.Filter;
import geektextteam9.com.geektext.service.BookService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/books")
public class BookRestController {

	@Autowired
	private BookService bookService;

	@PutMapping
	public ResponseEntity<Book> save(@RequestBody Book book) {
		return ResponseEntity.ok(bookService.save(book));
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<Book> findById(@PathVariable Integer id) {
		return ResponseEntity.ok(bookService.findById(id));
	}

	@GetMapping(path = "/isbn/{isbn}")
	public ResponseEntity<Book> findByIsbn(@PathVariable String isbn) {
		return ResponseEntity.ok(bookService.findByIsbn(isbn));
	}

	@GetMapping
	public List<Book> getAllBooks(){
		return bookService.getAllBooks();
	}
	@GetMapping(path = "/top/")
	public ResponseEntity<List<Book>> getTop() {
		return ResponseEntity.ok(bookService.getTop());
	}


	@GetMapping(path = "/rated/")
	public List<Book> getRated(){
		return bookService.getRated();
	}

	@PostMapping
	public ResponseEntity<Page<Book>> findAll(@RequestBody Filter filter) {
		return ResponseEntity.ok(bookService.findAll(filter));
	}

}
