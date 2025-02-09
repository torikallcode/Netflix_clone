import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/Hero';
import MovieRow from '../components/MoviewRow';
import Footer from '../components/Footer';
import HeartText from '../components/HeartText';
import { HeartIcon } from 'lucide-react';
import { Heart } from '../components/HeartIcon';
import { AboutSection } from '../components/AboutSection';
const mockMovies = {
  heroMovie: {
    title: 'Stranger Things',
    overview: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
    backdropUrl: 'img/hero.jpg'
  },
  rows: [
    {
      title: 'Trending Now',
      movies: [
        { id: 1, title: 'Movie 1', posterUrl: 'img/ls1.jpeg' },
        { id: 2, title: 'Movie 2', posterUrl: 'img/ls2.jpeg' },
        { id: 3, title: 'Movie 2', posterUrl: 'img/ls3.jpeg' },
        { id: 4, title: 'Movie 2', posterUrl: 'img/ls4.jpeg' },
        { id: 5, title: 'Movie 2', posterUrl: 'img/ls5.jpeg' },
        { id: 6, title: 'Movie 2', posterUrl: 'img/ls6.jpeg' },
        { id: 7, title: 'Movie 2', posterUrl: 'img/ls7.jpeg' },
        { id: 8, title: 'Movie 2', posterUrl: 'img/ls8.jpeg' },
        { id: 9, title: 'Movie 2', posterUrl: 'img/ls9.jpeg' },
        { id: 10, title: 'Movie 2', posterUrl: 'img/ls10.jpg' },
        { id: 11, title: 'Movie 2', posterUrl: 'img/ls11.jpg' },
        { id: 12, title: 'Movie 2', posterUrl: 'img/ls12.jpg' },

        // Tambahkan lebih banyak film
      ]
    },
    // {
    //   title: 'Top Rated',
    //   movies: [
    //     { id: 9, title: 'Movie 3', posterUrl: 'img/sampai_akhir.webp' },
    //     { id: 10, title: 'Movie 4', posterUrl: 'img/sampai_akhir.webp' },
    //     { id: 11, title: 'Movie 4', posterUrl: 'img/sampai_akhir.webp' },
    //     { id: 12, title: 'Movie 4', posterUrl: 'img/sampai_akhir.webp' },
    //     { id: 13, title: 'Movie 4', posterUrl: 'img/sampai_akhir.webp' },
    //     { id: 14, title: 'Movie 4', posterUrl: 'img/sampai_akhir.webp' },
    //     { id: 15, title: 'Movie 4', posterUrl: 'img/sampai_akhir.webp' },
    //     { id: 16, title: 'Movie 4', posterUrl: 'img/sampai_akhir.webp' },
    //     { id: 17, title: 'Movie 4', posterUrl: 'img/sampai_akhir.webp' },
    //     { id: 18, title: 'Movie 4', posterUrl: 'img/sampai_akhir.webp' },
    //     // Tambahkan lebih banyak film
    //   ]
    // }
  ]
};

export const Home = () => {
  return (
    <div className="bg-netflix-black min-h-screen text-white">
      <Header />
      <HeroBanner movie={mockMovies.heroMovie} />
      {mockMovies.rows.map((row, index) => (
        <MovieRow
          key={index}
          title={row.title}
          movies={row.movies}
        />
      ))}
      <div className='py-16'>
        <AboutSection />

      </div>
      <Footer />
    </div>
  );
}
