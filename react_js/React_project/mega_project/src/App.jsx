import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import auth_service from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Header,Footer } from './components/index';
import { Outlet } from 'react-router-dom';
function App() {
  const [loading,setloading]=useState(true);
  const dispatch=useDispatch()


  useEffect(()=>{
    auth_service.curr_user().then(
      (user_info)=>{
        if(user_info){
          dispatch(login(user_info))
        }else{
          dispatch(logout())
        }
      }
    ).finally(()=> setloading(false))
  },[dispatch])

  return !loading ? (
    <div className='page-bg flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
   </div>
  ):null
}

export default App
