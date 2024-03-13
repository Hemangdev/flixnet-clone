import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Navbar = () => {
  const { user, logOut } = UserAuth()
  const homeRedirect = useNavigate

  const handleLogOut = async () => {
    try {
      await logOut()
      homeRedirect('/signIn')
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <div className=' m-w-[1360px] flex justify-between p-4 items-center w-full absolute z-[100]'>
      <Link to='/'>
        <h1 className=' text-red-600 text-2xl lg:text-3xl font-bold'>FLIXNET</h1>
      </Link>
      {/* Conditional rendering */}
     {
      user?.email ?  <div>
      <Link to='/accounts' >
        <button className=' text-white font-bold sm:text-1xl md:2xl lg:2xl p-3 border-none '>Account</button> 
      </Link> 
      
        <button onClick={handleLogOut} className=' text-white bg-red-600  rounded p-2'>Logout</button>
       
    </div> :  <div>
        <Link to='/SignIn' >
          <button className=' text-white font-bold sm:text-1xl md:2xl lg:2xl p-3 border-none '>Sign In</button> 
        </Link> 
        <Link to='/SignUp' > 
          <button className=' text-white bg-red-600  rounded p-2'>Sign Up</button>
        </Link>
      </div>
     }
    </div>
  )
}

export default Navbar