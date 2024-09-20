import React, { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", year: 2010, description: "A thief who enters the dreams of others to steal secrets from their subconscious.", youtubeUrl: "https://www.youtube.com/embed/YoHD9XEInc0", imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg" },
    { id: 2, title: "The Shawshank Redemption", year: 1994, description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", youtubeUrl: "https://www.youtube.com/embed/6hB3S9bIaco", imageUrl: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" },
    { id: 3, title: "The Dark Knight", year: 2008, description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", youtubeUrl: "https://www.youtube.com/embed/EXeTwQWrcwY", imageUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg" },
    { id: 4, title: "Pulp Fiction", year: 1994, description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", youtubeUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY", imageUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" },
    { id: 5, title: "The Matrix", year: 1999, description: "A computer programmer discovers that reality as he knows it is a simulation created by machines to subjugate humanity.", youtubeUrl: "https://www.youtube.com/embed/m8e-FF8MsqU", imageUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" },
    { id: 6, title: "Forrest Gump", year: 1994, description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.", youtubeUrl: "https://www.youtube.com/embed/bLvqoHBptjg", imageUrl: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
    { id: 7, title: "Goodfellas", year: 1990, description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.", youtubeUrl: "https://www.youtube.com/embed/qo5jJpHtI1Y", imageUrl: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" },
    { id: 8, title: "The Silence of the Lambs", year: 1991, description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.", youtubeUrl: "https://www.youtube.com/embed/W6Mm8Sbe__o", imageUrl: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" },
    { id: 9, title: "Schindler's List", year: 1993, description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.", youtubeUrl: "https://www.youtube.com/embed/gG22XNhtnoY", imageUrl: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" },
    { id: 10, title: "Fight Club", year: 1999, description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.", youtubeUrl: "https://www.youtube.com/embed/qtRKdVHc-cE", imageUrl: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" },
    { id: 11, title: "The Godfather", year: 1972, description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", youtubeUrl: "https://www.youtube.com/embed/sY1S34973zA", imageUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" },
    { id: 12, title: "Schindler's List", year: 1993, description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.", youtubeUrl: "https://www.youtube.com/embed/gG22XNhtnoY", imageUrl: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" },
    { id: 13, title: "12 Angry Men", year: 1957, description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.", youtubeUrl: "https://www.youtube.com/embed/_13J_9B5jEk", imageUrl: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" },
    { id: 14, title: "The Lord of the Rings: The Return of the King", year: 2003, description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.", youtubeUrl: "https://www.youtube.com/embed/r5X-hFf6Bwo", imageUrl: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" },
    { id: 15, title: "Pulp Fiction", year: 1994, description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", youtubeUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY", imageUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" },
    { id: 16, title: "The Pianist", year: 2002, description: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.", youtubeUrl: "https://www.youtube.com/embed/BFwGqLa_oAo", imageUrl: "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" },
    { id: 17, title: "The Departed", year: 2006, description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.", youtubeUrl: "https://www.youtube.com/embed/iojhqm0JTW4", imageUrl: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg" },
    { id: 18, title: "The Dark Knight Rises", year: 2012, description: "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Selina, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.", youtubeUrl: "https://www.youtube.com/embed/GokKUqLcvD8", imageUrl: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg" },
    { id: 19, title: "The Revenant", year: 2015, description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.", youtubeUrl: "https://www.youtube.com/embed/LoebZZ8K5N0", imageUrl: "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg" },
    { id: 20, title: "The Shape of Water", year: 2017, description: "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.", youtubeUrl: "https://www.youtube.com/embed/XFYWazblaUA", imageUrl: "https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg" },
    { id: 21, title: "The Grand Budapest Hotel", year: 2014, description: "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.", youtubeUrl: "https://www.youtube.com/embed/1Fg5iWmQjwk", imageUrl: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg" },
    { id: 23, title: "The Social Network", year: 2010, description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.", youtubeUrl: "https://www.youtube.com/embed/lB95KULmhOM", imageUrl: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" },
    { id: 24, title: "The Wolf of Wall Street", year: 2013, description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.", youtubeUrl: "https://www.youtube.com/embed/iszwuX1AK6A", imageUrl: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg" },
    { id: 25, title: "The Imitation Game", year: 2014, description: "During World War II, mathematician Alan Turing tries to break the Enigma code with help from fellow mathematicians.", youtubeUrl: "https://www.youtube.com/embed/S5CjKEFb-sM", imageUrl: "https://m.media-amazon.com/images/M/MV5BNDkwNTEyMzkzNl5BMl5BanBnXkFtZTgwNTAwNzk3MjE@._V1_SX300.jpg" },
    { id: 26, title: "The Hateful Eight", year: 2015, description: "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.", youtubeUrl: "https://www.youtube.com/embed/nIOmot7FNU0", imageUrl: "https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg" },
    { id: 27, title: "The Revenant", year: 2015, description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.", youtubeUrl: "https://www.youtube.com/embed/LoebZZ8K5N0", imageUrl: "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg" },
    { id: 28, title: "The Shape of Water", year: 2017, description: "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.", youtubeUrl: "https://www.youtube.com/embed/XFYWazblaUA", imageUrl: "https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg" },
    { id: 29, title: "The Grand Budapest Hotel", year: 2014, description: "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.", youtubeUrl: "https://www.youtube.com/embed/1Fg5iWmQjwk", imageUrl: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg" },
    { id: 31, title: "The Social Network", year: 2010, description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.", youtubeUrl: "https://www.youtube.com/embed/lB95KULmhOM", imageUrl: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" },
    { id: 32, title: "The Wolf of Wall Street", year: 2013, description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.", youtubeUrl: "https://www.youtube.com/embed/iszwuX1AK6A", imageUrl: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg" },
    { id: 33, title: "The Imitation Game", year: 2014, description: "During World War II, mathematician Alan Turing tries to break the Enigma code with help from fellow mathematicians.", youtubeUrl: "https://www.youtube.com/embed/S5CjKEFb-sM", imageUrl: "https://m.media-amazon.com/images/M/MV5BNDkwNTEyMzkzNl5BMl5BanBnXkFtZTgwNTAwNzk3MjE@._V1_SX300.jpg" },
    { id: 34, title: "The Hateful Eight", year: 2015, description: "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.", youtubeUrl: "https://www.youtube.com/embed/nIOmot7FNU0", imageUrl: "https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg" },

  ]);

 

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>NetflixClone</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a movie"
        />
      </header>
      <main>
        {selectedMovie ? (
          <div className="movie-detail">
            <button className="close-btn" onClick={() => setSelectedMovie(null)}>X</button>
            <h2>{selectedMovie.title} ({selectedMovie.year})</h2>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src={selectedMovie.youtubeUrl}
                title={selectedMovie.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p>{selectedMovie.description}</p>
          </div>
        ) : (
          <div className="movie-grid">
            {filteredMovies.map((movie) => (
              <div key={movie.id} className="movie-item" onClick={() => setSelectedMovie(movie)}>
                <img src={movie.imageUrl} alt={movie.title} />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
