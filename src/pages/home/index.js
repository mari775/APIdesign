import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn, GenreFilter, FilterContainer, FilterHeader, ClearFilters } from "./style";
import { Link } from "react-router-dom";

function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const KEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=pt-BR`)
      .then((res) => res.json())
      .then((data) => setGenres(data.genres))
      .catch((err) => console.error(err));
  }, [KEY]);

  useEffect(() => {
    setIsLoading(true);
    const genreString = selectedGenres.join(",");
    const url =
      selectedGenres.length > 0
        ? `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=${genreString}&language=pt-BR`
        : `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [KEY, selectedGenres]);

  function handleGenreChange(e) {
    const genreId = Number(e.target.value);
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  }

  function clearAllFilters() {
    setSelectedGenres([]);
  }

  function getSelectedGenreNames() {
    return genres
      .filter(genre => selectedGenres.includes(genre.id))
      .map(genre => genre.name);
  }

  return (
    <Container>
      <h1>Filmes!</h1>

      <FilterContainer>
        <FilterHeader>
          <h2>Filtrar por gênero:</h2>
          {selectedGenres.length > 0 && (
            <ClearFilters onClick={clearAllFilters}>
              Limpar filtros ({selectedGenres.length})
            </ClearFilters>
          )}
        </FilterHeader>
        
        <GenreFilter>
          {genres.map((genre) => (
            <label key={genre.id}>
              <input
                type="checkbox"
                value={genre.id}
                onChange={handleGenreChange}
                checked={selectedGenres.includes(genre.id)}
              />
              <span>{genre.name}</span>
            </label>
          ))}
        </GenreFilter>

        {selectedGenres.length > 0 && (
          <div style={{ marginTop: '10px', color: '#666' }}>
            <small>
              Filtrando por: {getSelectedGenreNames().join(', ')}
            </small>
          </div>
        )}
      </FilterContainer>

      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>Carregando filmes...</p>
        </div>
      ) : (
        <MovieList>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Movie key={movie.id}>
                <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                <span>{movie.title}</span>
                <Link to={`/${movie.id}`}>
                  <Btn>Detalhes</Btn>
                </Link>
              </Movie>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <p>Nenhum filme encontrado para os filtros selecionados.</p>
            </div>
          )}
        </MovieList>
      )}
    </Container>
  );
}

export default Home;