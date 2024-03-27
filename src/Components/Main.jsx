import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import ErrorPage from './Error'
import Loader from  '../assests/black spinner.gif'

const Main = () => {
    const [movies, setMovies] = useState([])
    const [error,setError] = useState()
    const [loading,setLoading] = useState(false)

    const randomMovie = movies[Math.floor(Math.random() * movies.length)]

    const apiKey = '2bab2d165036efe76d879bd61013c6b4'
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`

    useEffect(async () => {
        setError("")
        setLoading(true)
        try {
            await  axios.get(url).then((res) => {
                setMovies(res.data.results)
            }).catch((error) => {setError(error)})
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
    }, [])

    return (
         <>
          { error ?  <ErrorPage/> :    <div className='h-[550px] w-full text-white'>
            <div className='h-full w-full'>
                <div className='h-[550px] w-full absolute bg-gradient-to-r from-black'></div>
                
                {loading ?  <div className='flex items-center justify-center'><img className='h-[200px]' src={Loader} alt="" /></div> : null }
               
               
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`} alt="" />
            </div>
            <div className=' absolute top-[20%] w-full p-4 md:p-8'>
                    <h1 className=' text-3xl font-bold md:text-5xl'>{randomMovie?.title}</h1>
                <div className='my-4'>
                    <button className=' bg-white text-black border border-white cursor-pointer py-2 px-5 rounded'>Play</button>
                    <button className=' bg-black text-white border border-white cursor-pointer py-2 px-5 rounded ml-4'>Watch Later</button>
                </div>
                <p className=' text-gray-500 text-sm font-semibold'>Released on {randomMovie?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{randomMovie?.overview}</p>
            </div>

        </div> }
         
     
         </>
    )
}

export default Main