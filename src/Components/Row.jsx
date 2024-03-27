import axios from 'axios'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import React, { useEffect, useState } from 'react'

const Row = ({title,fethUrlApi}) => {
     
    const [movie,setMovies] = useState([])
    const [isLiked,setIsLiked] = useState(false)

    useEffect( async () => {
        await axios.get(fethUrlApi).then((res) => {
            setMovies(res.data.results)
        }).catch((error) => {console.log(error.message)})
    },[fethUrlApi])
    console.log(movie);
  return (
    <>
        <h2 className=' text-white font-bold p-4 md:text-xl'>{title}</h2>
        <div className=' relative flex items-center '>
            <div id={'slider'} className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative scrollbar-hide'>
                {
                    movie.map((item,index)=>(
                        <div key={index} className=' w-[160px] sm:w=[200px] md:w-[240px]  lg:w-[280px] inline-block cursor-pointer relative p-2 '>

                            <img className='w-ful h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt="" />
                            <div className=' absolute top-0 right-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 duration-300 text-white'>
                                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}
                                </p>
                                <p>
                                    {isLiked ? <FaHeart className='absolute top-4 left-4' /> : <FaRegHeart className='absolute top-4 left-4' />}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Row