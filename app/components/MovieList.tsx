import MovieCard from "./MovieCard";

const MovieList = ({movies} : any) => {
    return (  
        <div className="flex flex-wrap justify-between">
            {movies.map((movie:any) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    );
}
 
export default MovieList;