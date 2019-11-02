package geektextteam9.com.geektext.repository;

import geektextteam9.com.geektext.model.User;

import java.util.List;

public interface UserRepository {
    int insertUser(int id, User user);

    default int insertUser(User user){
        int id = (int) (Math.random()*1000); //generate random ID
        return insertUser(id, user); // return insertUser;

    }

    List<User> selectAllUsers();
}
