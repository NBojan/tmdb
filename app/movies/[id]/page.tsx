import axios from "axios";
import placeholder from "@/utils/placeholder.jpg";
import type { Metadata } from 'next'
import { url, options } from "@/utils/forFetching";

export const metadata: Metadata = {
  title: 'Movie - NB Movies - TMDB',
  description: 'Movie Page NB Movies, TMDB, Search for movies, trending, top rated, your favourites...',
}
const imgUrl = "https://image.tmdb.org/t/p/original";

const getMovie = async (id: string) => {
    const response = await axios(`${url}movie/${id}`, options).catch((err) => {
        throw new Error(err.response.data.status_message);
    });
    
    return response.data
};

const MoviePage = async ({ params }: { params: { id: string } }) => {
  const movie = await getMovie(params.id);
  
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <article className="flex items-center flex-col sm:flex-row">
            <div className="basis-[40%] mb-4 sm:mb-0 sm:mr-8">
                <img src={movie.poster_path ?  imgUrl+movie.poster_path : placeholder.src} alt="Thumbnail" className="w-full h-[360px] sm:h-[400px] lg:h-[460px] 2xl:h-[520px] rounded" />
            </div>

            <div className="flex-1">
                <h3 className="font-semibold">{movie.title || movie.original_title}</h3>
                <p className="mb-3">
                    <span className="font-semibold">Overview: </span>
                    <span className="dark:text-gray-300">{movie.overview}</span>
                </p>
                <p className="mb-3">
                    <span className="font-semibold">Date Released: </span>
                    <span className="dark:text-gray-300">{movie.release_date}</span>
                </p>
                <p className="mb-3">
                    <span className="font-semibold">Rating: </span>
                    <span className="dark:text-gray-300">{movie.vote_average}</span>
                </p>
            </div>
        </article>
      </div>
    </section>
  );
};

export default MoviePage;
