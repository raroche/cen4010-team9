package geektextteam9.com.geektext.model;


import com.fasterxml.jackson.annotation.JsonProperty;

public class User {
    private int id;
    private String name;
    private String email;
    private String username;
    private String password;
    private String nickname;
    private String card;
    private String shipping;

    public User(@JsonProperty("id") int id,
                @JsonProperty("name") String name, String email, String username, String password, String nickname, String card, String shipping){
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.nickname = nickname;
        this.card = card;
        this.shipping = shipping;
    }

    public User(int id, String name, String email, String username, String password, String nickname){
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.nickname = nickname;
        this.card = null;
        this.shipping = null;
    }

    public User(int id, String name){
        this.id = id;
        this.name = name;
        this.email = null;
        this.username = null;
        this.password = null;
        this.nickname = null;
        this.card = null;
        this.shipping = null;
    }

    public User(){
        this.id = 0;
        this.name = null;
        this.email = null;
        this.username = null;
        this.password = null;
        this.nickname = null;
        this.card = null;
        this.shipping = null;
    }

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getUsername(){
        return username;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String getNickname(){
        return nickname;
    }

    public void setNickname(String nickname){
        this.nickname = nickname;
    }

    public String getCard(){
        return card;
    }

    public void setCard(String card){
        this.card = card;
    }

    public String getShipping(){
        return shipping;
    }

    public void setShipping(String shipping){
        this.shipping = shipping;
    }
}

