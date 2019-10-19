package geektextteam9.com.geektext.ws;

import geektextteam9.com.geektext.model.Book;
import geektextteam9.com.geektext.model.Wishlist;
import geektextteam9.com.geektext.service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/wishlists")
public class WishlistRestController {
    @Autowired
    public WishlistService wishlistService;

    @PutMapping
    public ResponseEntity<Wishlist> save(@RequestBody Wishlist wishlist) {
        return ResponseEntity.ok(wishlistService.save(wishlist));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Wishlist> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(wishlistService.findByUser(id));
    }

}
