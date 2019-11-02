package geektextteam9.com.geektext.repository;
import geektextteam9.com.geektext.model.User;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository("fakeData")
public class TempUser implements UserRepository {
    private static List<User> users = new ArrayList<>();

    @Override
    public int insertUser(int id, User user) {
        users.add(new User(id, user.getName(), user.getEmail(), user.getUsername(),user.getPassword(), user.getNickname()));
        return 1;
    }

    @Override
    public List<User> selectAllUsers() {
        return users;
    }


//    static {
//        users = new List<Integer, User>(){
//            {
//                put(1, new User(1, "Janeth", "jarri023@fiu.edu", "jarri023", "password123", "JayGOAT"));
//                put(2, new User(2, "Roland", "rolypoly@fiu.edu", "rolypoly123", "ilovebootstrap", "RolydaPoly"));
//
//            }
//        };
//    }


}
