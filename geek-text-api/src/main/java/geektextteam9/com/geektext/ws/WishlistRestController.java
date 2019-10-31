package geektextteam9.com.geektext.ws;


import geektextteam9.com.geektext.service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import geektextteam9.com.geektext.model.User_Wishlist;


@CrossOrigin
@RestController
@RequestMapping(value = "/wishlist")
public class WishlistRestController {
    @Autowired
    public WishlistService wishlistService;

    @GetMapping(path = "/{id}")
    public ResponseEntity<User_Wishlist> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(wishlistService.findById(id));
    }
}
