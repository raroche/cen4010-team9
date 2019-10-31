package geektextteam9.com.geektext.repository;

import geektextteam9.com.geektext.model.User_Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;


public interface WishlistRepository extends JpaRepository<User_Wishlist, Integer> {
    public User_Wishlist findById(int id);
}
