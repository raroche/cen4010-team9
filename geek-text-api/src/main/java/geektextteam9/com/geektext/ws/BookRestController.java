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

	@PostMapping
	public ResponseEntity<Page<Book>> findAll(@RequestBody Filter filter) {
		return ResponseEntity.ok(bookService.findAll(filter));
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
	public ResponseEntity<List<Book>> getRated() {
		return ResponseEntity.ok(bookService.getRated());
	}

	@GetMapping(path = "/programming/")
	public ResponseEntity<List<Book>> getProgramming() {
		return ResponseEntity.ok(bookService.getProgramming());
	}

	@GetMapping(path = "/robotics/")
	public ResponseEntity<List<Book>> getRobotics() {
		return ResponseEntity.ok(bookService.getRobotics());
	}

	@GetMapping(path = "/network/")
	public ResponseEntity<List<Book>> getNetwork() {
		return ResponseEntity.ok(bookService.getNetwork());
	}

	@GetMapping(path = "/AI/")
	public ResponseEntity<List<Book>> getAI() {
		return ResponseEntity.ok(bookService.getAI());
	}

	@GetMapping(path = "/rating0/")
	public ResponseEntity<List<Book>> getRating0() {
		return ResponseEntity.ok(bookService.getRating0());
	}

	@GetMapping(path = "/rating1/")
	public ResponseEntity<List<Book>> getRating1() {
		return ResponseEntity.ok(bookService.getRating1());
	}

	@GetMapping(path = "/rating2/")
	public ResponseEntity<List<Book>> getRating2() {
		return ResponseEntity.ok(bookService.getRating2());
	}

	@GetMapping(path = "/rating3/")
	public ResponseEntity<List<Book>> getRating3() {
		return ResponseEntity.ok(bookService.getRating3());
	}

	@GetMapping(path = "/rating4/")
	public ResponseEntity<List<Book>> getRating4() {
		return ResponseEntity.ok(bookService.getRating4());
	}

	@GetMapping(path = "/rating5/")
	public ResponseEntity<List<Book>> getRating5() {
		return ResponseEntity.ok(bookService.getRating5());
	}




}
