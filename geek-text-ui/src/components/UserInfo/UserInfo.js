import React, { Component } from 'react'

class usersInfo extends Component{
    state = {
        loading: true,
        error: null,
        users: []
    };

    async componentDidMount(){
        const url = "http://localhost:8090/api/users/";
        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({users: data, loading: false});
        fetch(url).then(res => {
            if(res.ok){
                return res.json();
            }else{
                throw Error("Error getting your information!")
            }}).then(users => {
                this.setState({users:users, loading:false});
                }).catch(error => this.setState({error:error}))
    }

    render(){
        const {loading, error, users} = this.state;

        if(error){
            return <div>{error.message}</div>
        }

        if(loading){
            return <div>Loading...</div>;
        }

        if(!users){
            return <div>No users.</div>;
        }

        return(
            <div>
                <div>
                    {users.map(user => (
                        <div>
                            {user.first_name}
                        </div>
                    ))}
                </div>
                <div>Email: </div>
                <div>usersname: </div>
                <div>Password: </div>
            </div>
        );
    }
}

export default usersInfo;