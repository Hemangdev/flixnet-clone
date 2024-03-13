import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { AuthContextProvider } from './Context/AuthContext'
import Signup from './Pages/Signup'
import SignIn from './Pages/SignIn'
import Account from './Pages/Account'


const App = () => {
  return (
    <div>
      <AuthContextProvider> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignUp' element ={<Signup />} />
          <Route path='/SignIn' element ={<SignIn />} />
          <Route path='/accounts' element = {<Account />} />
        </Routes> 
      </AuthContextProvider>
    </div>
  )
}

export default App