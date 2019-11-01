package geektextteam9.com.geektext.service;


import geektextteam9.com.geektext.model.Author;
import geektextteam9.com.geektext.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorService {

    @Autowired
    private AuthorRepository authorRepository;

    public Author findById(int id) {
        return authorRepository.getOne(id);
    }

}
