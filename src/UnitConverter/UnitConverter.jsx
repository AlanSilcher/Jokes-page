import { useState, useEffect } from "react";
import "./UnitConverter.css";

export default function UnitConverter() {
  const colors = ["#FF5F5D", "#E130FF" , "#4A73FF", "#F2B705", "#A6032F" , "#D90416", "#00BBC9", "#217373", "#0CE891", "#5A86BF", "#9FBE45", "#9945BF", "#F25B29", "#F2055C", "#68828C", "#262626", "#737373"]
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single&amount=6")
      .then((res) => res.json())
      .then((data) => {
        const filteredJokes = data.jokes.filter(
          (el) =>
            !el.joke.includes(
              "// This line doesn't actually do anything, but the code stops working when I delete it."
            )
        );
        setJokes(filteredJokes.slice(0, 5));
      });
  }, []);

  const handleNewJokes = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single&amount=6")
      .then((res) => res.json())
      .then((data) => {
        const filteredJokes = data.jokes.filter(
          (el) =>
            !el.joke.includes(
              "// This line doesn't actually do anything, but the code stops working when I delete it."
            )
        );
        setJokes(filteredJokes.slice(0, 5));
      });
  };

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="container">
      <h1 className="title">Jokes page</h1>
      {jokes.map((el, index) => (
        <div
          className="card"
          key={index}
          style={{ backgroundColor: getRandomColor() }}
        >
          <p>{el.joke}</p>
        </div>
      ))}
      <button className="button" onClick={handleNewJokes}>
      get new jokes
      </button>
    </div>
  );
}
