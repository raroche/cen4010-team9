package geektextteam9.com.geektext.service;

import geektextteam9.com.geektext.model.User;
import geektextteam9.com.geektext.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(@Qualifier("fakeData") UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public int insertUser(User user){
        return userRepository.insertUser(user);
    }

    public List<User> getAllUsers(){
        return userRepository.selectAllUsers();
    }
}
