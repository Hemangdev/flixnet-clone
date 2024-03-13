import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'

const Home = () => {

  const apiKey = '2bab2d165036efe76d879bd61013c6b4'
  const endPoints = {
    upComingEndPoint :  `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`,
    trendingEndPoint : `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
    trendingWeekly : `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`,
    arrivingToday : `
    https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`
    
  }

  return (
    <>
    <Main />
    <Row title='UpComing' fethUrlApi={endPoints.upComingEndPoint}/>
    <Row title='Popular' fethUrlApi={endPoints.trendingEndPoint} />
    <Row title='Trending' fethUrlApi={endPoints.trendingWeekly}/>
    <Row title='Arriving Today' fethUrlApi={endPoints.arrivingToday}/>
    {/* <Row title='Horror'/> */}
    
    
    </>
  )
}

export default Home