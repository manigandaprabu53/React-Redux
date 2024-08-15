import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Common/Post';
import NoData from './NoData';

function Home() {

  let blogs = useSelector((state)=>state.blogs)
  console.log(blogs);
  
  return <div className='home-wrapper'>
    {
      blogs.filter((e)=>e.status).length ? blogs.filter(e=>e.status).map((e, i)=><Post key={i} title={e.title} description={e.description} image={e.image}/>) : <NoData/>
    }
  </div>
}

export default Home