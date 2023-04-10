import React, { useEffect, useState} from 'react';
import './App.css'
import Tmdb from '../api/Tmdb';
import MovieRow from '../components/MovieRow';
import FeaturedMovie from '../components/FeaturedMovie';
import Header from '../components/Header';

export default () =>{
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
    useEffect(()=>
    {
      const loadAll = async () => {

  
        let list = await Tmdb.getHomeList();
        setMovieList(list);
        
        let trending = list.filter(i=> i.slug === 'trending');
        let randomChosen = Math.floor(Math.random() * (trending[0].items.results.length - 1));
        let chosen = trending[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
        
        
        setFeaturedData(chosenInfo);
      }
      loadAll();
    }, []);

    return (
      <div className='page'>
        <Header />
        {featuredData && <FeaturedMovie item={featuredData}/>}
      <section className='lists'>
        {movieList.map((item, key) => (
             <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      </div>
    );
}