import Link from "next/link";
import placeholder from "@/utils/placeholder.jpg";
import { AiOutlineLike } from "react-icons/ai";

const imgUrl = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }: any) => {
  return (
    <article className="rounded border mb-4 border-slate-500 basis-full sm:basis-[48.5%] lg:basis-[31.5%] xl:basis-[23.5%] 2xl:basis-[18.5%] hover:shadow-slate-400 hover:shadow-md transition-shadow">
      <Link href={`/movies/${movie.id}`} className="h-[100%] flex flex-col p-3">
        <img src={movie.poster_path ?  imgUrl+movie.poster_path : placeholder.src} alt="Thumbnail" className="w-full rounded-t mb-2 h-[300px]" />
        
        <div className="flex-1 flex flex-col justify-between ">
            <div>
                <h5 className="font-semibold mb-1">{movie.title || movie.original_title}</h5>
                <p className="line-clamp-3 sm:text-base text-sm dark:text-gray-300">{movie.overview}</p>
            </div>

            <div className="flex justify-between items-center mt-2 sm:text-base text-sm dark:text-gray-300">
                <p>{movie.release_date}</p>
                <p className="flex items-center">
                    <span className="mr-1"><AiOutlineLike /></span>
                    <span>{movie.vote_count}</span>
                </p>
            </div>
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;