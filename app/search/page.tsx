import axios from "axios";
import { MovieList } from "@/app/components";
import { options, url } from "@/utils/forFetching";

const getMovies = async (searchTerm: string) => {
  const response = await axios(
    `${url}${
      searchTerm
        ? `search/movie?query=${searchTerm}`
        : "trending/movie/week?language=en-US"
    }`,
    options
  ).catch((err) => {
    throw new Error(err.response.data.status_message);
  });

  return response.data.results;
};

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { query: string };
}) => {
  const movies = await getMovies(searchParams.query);

  return (
    <section className="py-8">
      <div className="container mx-auto">
        {movies.length < 1 ? (
          <div className="text-center">
            <h3>No movies match your search..</h3>
          </div>
        ) : (
          <MovieList movies={movies} />
        )}
      </div>
    </section>
  );
};

export default SearchPage;
