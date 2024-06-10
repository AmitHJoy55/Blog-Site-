import React, { useContext } from 'react'
import {Context}  from '../../main' ;
import HeroSection from '../miniComponents/HeroSection';
import TrendingBlogs from '../miniComponents/TrendingBlogs';
import LatestBlogs from '../miniComponents/LatestBlogs' ;
const Home = () => {
  const {mode , blogs} = useContext(Context);
  const filteredBlogs = blogs.slice(0, 6);
  return <article className={mode === "dark" ? "dark-bg" : "light-bg" }>
    <HeroSection/>
    <TrendingBlogs/>
    <LatestBlogs heading={"Latest Blogs"} blogs={filteredBlogs}/>
    </article>
}

export default Home
