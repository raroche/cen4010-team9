package geektextteam9.com.geektext.ws;

import geektextteam9.com.geektext.model.Author;
import geektextteam9.com.geektext.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/author")
public class AuthorRestController {

    @Autowired
    private AuthorService authorService;

    @GetMapping(path = "/{id}")
    public ResponseEntity<Author> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(authorService.findById(id));
    }

}


