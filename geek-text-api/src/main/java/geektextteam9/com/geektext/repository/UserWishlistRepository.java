package geektextteam9.com.geektext.repository;

import geektextteam9.com.geektext.model.User_Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UserWishlistRepository extends JpaRepository<User_Wishlist, Integer> {

    @Query(value = "INSERT INTO book_in_wishlist(wishlist_id, book_id) VALUES(:wishlist_id,:book_id)", nativeQuery = true)
    public User_Wishlist addBook(
            @Param("book_id") int bookId,
            @Param("wishlist_id") int destList);
}
