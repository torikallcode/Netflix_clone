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
    title: 'Happy birthday - a Short But Meaningful Splinter of Time',
    overview: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
    backdropUrl: 'img/pic18.jpg'
  },
  rows: [
    {
      title: 'Trending Now',
      movies: [
        { id: 1, title: 'Movie 1', posterUrl: 'img/pic1.jpg' },
        { id: 2, title: 'Movie 2', posterUrl: 'img/pic2.jpg' },
        { id: 3, title: 'Movie 2', posterUrl: 'img/pic3.jpg' },
        { id: 4, title: 'Movie 2', posterUrl: 'img/pic4.jpg' },
        { id: 5, title: 'Movie 2', posterUrl: 'img/pic5.jpg' },
        { id: 6, title: 'Movie 2', posterUrl: 'img/pic6.jpg' },
        { id: 7, title: 'Movie 2', posterUrl: 'img/pic7.jpg' },
        { id: 8, title: 'Movie 2', posterUrl: 'img/pic8.jpg' },
        { id: 9, title: 'Movie 2', posterUrl: 'img/pic9.jpg' },
        { id: 10, title: 'Movie 2', posterUrl: 'img/pic10.jpg' },
        { id: 11, title: 'Movie 2', posterUrl: 'img/pic11.jpg' },
        { id: 12, title: 'Movie 2', posterUrl: 'img/pic14.jpg' },

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
