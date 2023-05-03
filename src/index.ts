import { Genre, Movie } from "./index.types";
import data from "./db.json";

export const getFilteredMovies = ({ genres }: { genres: Genre[] }): Movie[] => {
  // Filter the list of movies to contain only those that have at least one of the provided genres
  let filteredMovies = data.movies.filter((movie) => {
    return genres.some((genre) => movie.genres.includes(genre));
  });

  // Sort the filtered list of movies based on how many of the provided genres each movie contains
  filteredMovies.sort((a, b) => {
    const countGenres = (movie: Movie) =>
      genres.filter((genre) => movie.genres.includes(genre)).length;
    return countGenres(b) - countGenres(a);
  });

  // Remove duplicates from the list and filter out undefined values
  const uniqueMovies = Array.from(
    new Set(filteredMovies.map((movie) => movie.id))
  )
    .map((id) => filteredMovies.find((movie) => movie.id === id))
    .filter((movie) => movie !== undefined) as Movie[];

  // If the list is empty, return a single random movie from the original list
  if (uniqueMovies.length === 0) {
    return [data.movies[Math.floor(Math.random() * data.movies.length)]];
  }

  return uniqueMovies;
};
