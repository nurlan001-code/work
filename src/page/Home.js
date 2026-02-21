import React, { useState } from "react";
import "../App.css";

function App() {
  const [step, setStep] = useState(1);
  const [genre, setGenre] = useState("");
  const [actor, setActor] = useState("");
  const [mood, setMood] = useState("");
  const [result, setResult] = useState(null);

  const moviesByGenre = {
    comedy: ["Операция «Ы»", "Маска", "Тупой и ещё тупее"],
    action: ["Матрица", "Терминатор 2", "Мстители"],
    horror: ["Заклятие", "Пила", "Оно"],
    fantasy: ["Властелин колец", "Гарри Поттер", "Хроники Нарнии"],
  };

  const actors = {
    "Джеки Чан": ["Час пик", "Кунг‑фу Панда", "Пьяный мастер"],
    "Киану Ривз": ["Матрица", "Джон Уик", "Константин"],
    "Джим Керри": ["Маска", "Шоу Трумана", "Эйс Вентура"],
  };

  const moods = {
    happy: "Ты в хорошем настроении — комедии будут отличным выбором!",
    sad: "Если грустно, попробуй вдохновляющее фэнтези или добрую драму.",
    excited: "Когда хочется драйва — выбирай боевики!",
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setResult({
        genreMessage: moviesByGenre[genre] ? `Тебе подойдут фильмы жанра ${genre}.` : "",
        movies: moviesByGenre[genre] || [],
        actorMovies: actors[actor] || [],
        moodMessage: moods[mood] || "",
      });
    }
  };

  return (
    <div className="container">
      <h1 className="title">🎬 Опрос о фильмах</h1>

      {!result && (
        <div className="card">
          {step === 1 && (
            <>
              <p>Какой жанр тебе нравится?</p>
              <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="">Выбери жанр</option>
                <option value="comedy">Комедия</option>
                <option value="action">Боевик</option>
                <option value="horror">Ужасы</option>
                <option value="fantasy">Фэнтези</option>
              </select>
              <button onClick={handleNext}>Дальше</button>
            </>
          )}

          {step === 2 && (
            <>
              <p>Кто твой любимый актёр?</p>
              <select value={actor} onChange={(e) => setActor(e.target.value)}>
                <option value="">Выбери актёра</option>
                <option value="Джеки Чан">Джеки Чан</option>
                <option value="Киану Ривз">Киану Ривз</option>
                <option value="Джим Керри">Джим Керри</option>
              </select>
              <button onClick={handleNext}>Дальше</button>
            </>
          )}

          {step === 3 && (
            <>
              <p>Какое у тебя настроение?</p>
              <select value={mood} onChange={(e) => setMood(e.target.value)}>
                <option value="">Выбери настроение</option>
                <option value="happy">Весёлое</option>
                <option value="sad">Грустное</option>
                <option value="excited">Взволнованное</option>
              </select>
              <button onClick={handleNext}>Узнать результат</button>
            </>
          )}
        </div>
      )}

      {result && (
        <div className="card result">
          <p>{result.genreMessage}</p>
          {result.movies.length > 0 && (
            <>
              <h3>🎞 Фильмы по жанру:</h3>
              <ul>{result.movies.map((m, i) => <li key={i}>{m}</li>)}</ul>
            </>
          )}
          {result.actorMovies.length > 0 && (
            <>
              <h3>⭐ Фильмы с любимым актёром:</h3>
              <ul>{result.actorMovies.map((m, i) => <li key={i}>{m}</li>)}</ul>
            </>
          )}
          <p>{result.moodMessage}</p>
        </div>
      )}
    </div>
  );
}

export default App;