import React, { useContext } from 'react'
import user_detail_Context from '../context/userContext'
function hasInteger(str) {
    return /\d/.test(str);
}

function Profile() {
      const {data}=useContext(user_detail_Context);
    if (!data) return <div>Please login first</div>;

  if(!data.username) return <div>please write the username</div>
  if(!data.password) return <div>please write the password</div>
  const pass=data.password;
  if(hasInteger(pass)){
      return  <div>welcome {data.username}</div>
  }

  return <div>please include interger in password </div>   
}

export default Profile