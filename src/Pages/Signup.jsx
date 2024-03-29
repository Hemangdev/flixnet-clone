import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, signUp } = UserAuth()
    const reDirect = useNavigate()

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            reDirect('/')
        } catch (error) {
            console.log(error)
        }
    }
    console.log(user)




    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign Up</h1>
                            <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4'>
                                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="text" placeholder='Email' />
                                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' />
                                <button className=' bg-red-600 text-white py-3 my-6 font-bold rounded'>Sign  Up</button>
                                <div className='flex justify-between items-center text-sm text-gray-600'>
                                    <p><input className='mr-2' type="checkbox" />Remember me</p>
                                    <p>Need Help?</p>
                                </div>
                                <Link to='/SignIn' >
                                    <p className='py-3'>
                                        <span className='text-gray-600'>Already have FlixNet? </span>
                                        Sign In
                                    </p>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup