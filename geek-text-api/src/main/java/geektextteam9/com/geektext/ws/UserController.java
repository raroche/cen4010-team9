package geektextteam9.com.geektext.ws;

import geektextteam9.com.geektext.model.User;
import geektextteam9.com.geektext.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RequestMapping("/users")
@RestController
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void createUser(@RequestBody User user){
        userService.createUser(user);
    }

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping(path = "{id}")
    public Optional<User> findUserById(@PathVariable("id") Integer id){
        return userService.findUserById(id);
    }

    @DeleteMapping(path = "{id}")
    public void deleteUser(@PathVariable("id") Integer id){
        userService.deleteUser(id);
    }

    @PutMapping(path = "{id}")
    public void updateUser(@Valid @NotNull @PathVariable("id") @RequestBody User updatedUser){
        userService.updateUser(updatedUser);
    }
}
