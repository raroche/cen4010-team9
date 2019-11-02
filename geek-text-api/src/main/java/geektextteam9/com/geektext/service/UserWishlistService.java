package geektextteam9.com.geektext.service;

import geektextteam9.com.geektext.model.User_Wishlist;
import geektextteam9.com.geektext.repository.UserWishlistRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserWishlistService {

    @Autowired
    private UserWishlistRepository userWishlistRepository;

    public User_Wishlist findById(int id) {
        return userWishlistRepository.getOne(id);
    }
    public User_Wishlist addBook(int bookId, int destList){return  userWishlistRepository.addBook(bookId, destList);}

    public User_Wishlist save(User_Wishlist wishlist) {
        return userWishlistRepository.save(wishlist);    }
}
