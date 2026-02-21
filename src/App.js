import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import MovieSection from "./component/MovieSection";
import Footer from "./component/Footer";
import Home from "./page/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const movies = [
    { title: "Матрица", genre: "Боевик", poster: "https://via.placeholder.com/150x220?text=Matrix" },
    { title: "Маска", genre: "Комедия", poster: "https://via.placeholder.com/150x220?text=Mask" },
    { title: "Заклятие", genre: "Ужасы", poster: "https://via.placeholder.com/150x220?text=Conjuring" },
    { title: "Властелин колец", genre: "Фэнтези", poster: "https://via.placeholder.com/150x220?text=LOTR" },
  ];

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <MovieSection movies={movies} />
      <Footer />
    </div>
  );
}

export default App;