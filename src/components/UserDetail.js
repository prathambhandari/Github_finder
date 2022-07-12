import React from 'react'
import {

  useParams
} from "react-router-dom";

const UserDetail = ({UserItem}) => {
  
  const {id} = useParams();

  return (
    <div>
        <h1>hello  : {id}</h1> 
    </div>
  )
}

export default UserDetail;