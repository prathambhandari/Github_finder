import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({user}) =>{
    // const {login , avatar_url}=props.user;
    console.table(user)
    return(
        <React.Fragment>
            <div className="card text-center">
                <img src={user.avatar_url} alt="" className="round-img" style={{width:'80px',height:"80px"}}></img>
                <h3 style={{fontSize:'1rem'}}>{user.login}</h3>
                <Link to={`/user/${user.login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>


            {/* <div className=""> */}
            {/* {avatar_url}: "https://avatars.githubusercontent.com/u/56548231?v=4"
            {events_url}: "https://api.github.com/users/Pratham31/events{/privacy}"
            {followers_url}: "https://api.github.com/users/Pratham31/followers"
            {following_url}: "https://api.github.com/users/Pratham31/following{/other_user}"
            {gists_url}: "https://api.github.com/users/Pratham31/gists{/gist_id}"
            {gravatar_id}: ""
            {login}: "Pratham31"
            node_id: "MDQ6VXNlcjU2NTQ4MjMx"
            organizations_url: "https://api.github.com/users/Pratham31/orgs"
            received_events_url: "https://api.github.com/users/Pratham31/received_events"
            repos_url: "https://api.github.com/users/Pratham31/repos"
            score: 1
            site_admin: false
            starred_url: "https://api.github.com/users/Pratham31/starred{/owner}{/repo}"
            subscriptions_url: "https://api.github.com/users/Pratham31/subscriptions"
            type: "User"
            url: "https://api.github.com/users/Pratham31" */}
            {/* </div> */}

        </React.Fragment>
        
    )
}

export default UserItem;