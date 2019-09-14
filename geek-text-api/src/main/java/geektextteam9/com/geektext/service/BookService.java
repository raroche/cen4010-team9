package geektextteam9.com.geektext.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import geektextteam9.com.geektext.model.Book;
import geektextteam9.com.geektext.repository.BookRepository;

@Service
public class BookService {
	
	@Autowired
	private BookRepository bookRepository;
	
	public Book findById(int id)
	{
		return bookRepository.getOne(id);
	}

	public Book findBIsbn(String isbn)
	{
		return bookRepository.findByIsbn(isbn);
	}
	
	public Book save(Book book)
	{
		return bookRepository.save(book);
	}
}
