import axios from "axios";
import { MovieList } from "./components";
import { url, options } from "@/utils/forFetching";

const getMovies = async (genre: string | undefined) => {
  const response = await axios(
    `${url}${
      genre === "topRated" ? "movie/top_rated" : "trending/movie/week"
    }?language=en-US`,
    options
    ).catch((err) => {
      throw new Error(err.response.data.status_message);
    });
    
    return response.data.results;
};

const Home = async ({ searchParams }: { searchParams: { genre?: string } }) => {
  const movies = await getMovies(searchParams.genre);
  
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <MovieList movies={movies} />
      </div>
    </section>
  );
};

export default Home;
