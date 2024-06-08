import React, { useContext } from 'react'
import {Context}  from '../../main' ;
import HeroSection from '../miniComponents/HeroSection';
import TrendingBlogs from '../miniComponents/TrendingBlogs';
import LatestBlogs from '../miniComponents/LatestBlogs' ;
const Home = () => {
  const {mode} = useContext(Context);
  return <article className={mode === "dark" ? "dark-bg" : "light-bg" }>
    <HeroSection/>
    <TrendingBlogs/>
    <LatestBlogs/>
    </article>
}

export default Home
