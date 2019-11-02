package geektextteam9.com.geektext.ws;


import geektextteam9.com.geektext.model.Wishlist;
import geektextteam9.com.geektext.repository.WishlistRepository;
import geektextteam9.com.geektext.service.UserWishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import geektextteam9.com.geektext.model.User_Wishlist;

import java.util.List;


@CrossOrigin
@RestController
@RequestMapping(value = "/user")
public class UserWishlistRestController {
    @Autowired
    public UserWishlistService userWishlistService;

    @Autowired
    WishlistRepository wishlistRepository;

    @GetMapping(path = "/wishlist/{id}")
    public ResponseEntity<List<Wishlist>> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(userWishlistService.findById(id).getWishlists());
    }

    @PutMapping(path = "/addWishlist/{name}/{user_id}")
    ResponseEntity<List<Wishlist>> createWishlist(@PathVariable String name, @PathVariable Integer user_id){
        Wishlist newWishlist = new Wishlist();
        newWishlist.setName(name);
        wishlistRepository.save(newWishlist);
        User_Wishlist user = userWishlistService.findById(user_id);
        user.getWishlists().add(newWishlist);
        userWishlistService.save(user);
        return ResponseEntity.ok(userWishlistService.findById(user_id).getWishlists());
    }

    @PutMapping(path = "/removeWishlist/{wishlist_id}/{user_id}")
    ResponseEntity <List<Wishlist>> removeWishlist(@PathVariable Integer wishlist_id, @PathVariable Integer user_id ){
        Wishlist wishlist = wishlistRepository.getOne(wishlist_id);
        User_Wishlist user =userWishlistService.findById(user_id);
        user.getWishlists().remove(wishlist);
        wishlist.setBooks(null);
        wishlistRepository.delete(wishlist);
        userWishlistService.save(user);
        return ResponseEntity.ok(user.getWishlists());
    }
}
