package geektextteam9.com.geektext.ws;

import javax.persistence.MappedSuperclass;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import geektextteam9.com.geektext.model.Book;
import geektextteam9.com.geektext.service.BookService;


@RestController
@RequestMapping(value="/books")
public class BookRestController {
	
	@Autowired
	private BookService bookService;
	
	// Put Methods
	@PutMapping
	public ResponseEntity<Book> save(@RequestBody Book book) {
		return ResponseEntity.ok(bookService.save(book));
	}
	
	// Get Methods
	
	@RequestMapping(method= RequestMethod.GET, value="/{id}")
	public ResponseEntity<Book> get(@PathVariable(value="id") Integer id) {

		return ResponseEntity.ok(bookService.findById(id));
	}
		
	@RequestMapping(method= RequestMethod.GET, value="/isbn/{isbn}")
	public ResponseEntity<Book> get(@PathVariable(value="isbn") String isbn) {

		return ResponseEntity.ok(bookService.findBIsbn(isbn));
	}

}

//@RequestMapping(value="/book")
//public class BookController {
//	
//	@RequestMapping(method= RequestMethod.GET)
//	public String getBook() {
//		return "Books";
//		
//	}
//	
//}


