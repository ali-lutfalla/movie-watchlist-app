import './App.css'

// src/App.jsx
const movies = [
  {name: 'titanic', watched: true},
  {name: 'matrix', watched: true},
  {name: 'divergent', watched: false},
  {name: 'fifa', watched: false},
]

const App = () => {

  return (
    <>
    <h1>Movies list:</h1>
    <ul>
      {movies.map((movie,index) => (
        <li key={index} className={movie.watched ? 'completed' : 'not-completed'}>{movie.name}</li>
      ))}
    </ul>
    </>
  );
}

export default App
