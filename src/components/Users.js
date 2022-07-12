import React,{useState,useEffect} from "react";
import axios from 'axios';
import UserItem from "./UserItem";

const userStyle = {
    display: "grid",
    flexwrap: "wrap",
    justifycontent: "center",
    alignitems:"center",
    gridTemplateColumns:"repeat(4, 1fr)",
    gridGap:'1rem',
    image:{
        height:"50px",
        width:"50px",
        borderRadius:'100%'
    }
}


const Users = ({data}) => {
    const [users, setUsers] = useState([]);

    const searchName = async(data) => {
        const res =  await axios.get(`https://api.github.com/search/users?q=${data}`)
       setUsers(res.data.items)
     }
    

    useEffect(() => {
       searchName(data);
    }, [data]); 





    return(
        <>
         <div style={userStyle}>
            {Object.values(users).map((userdata,id)=> (
                
                <UserItem user={userdata} key={id}/>

                // <div key={id}>
                // <img src={userdata.avatar_url} alt="image" style={userStyle.image}/>
                // <p>{userdata.login}</p>

                // </div>
            ))}
        </div>
        </>
       
    );
    
}

export default Users;

