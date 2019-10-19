package geektextteam9.com.geektext.service;

import geektextteam9.com.geektext.model.Wishlist;
import geektextteam9.com.geektext.repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import geektextteam9.com.geektext.model.Filter;
import geektextteam9.com.geektext.repository.BookRepository;

@Service
public class WishlistService {

    @Autowired
    private WishlistRepository wishlistRepository;

    public Wishlist findByUser(int id) {
        return wishlistRepository.getOne(id);
    }
    public Wishlist save(Wishlist wishlist) {
        return wishlistRepository.save(wishlist);
    }



}
