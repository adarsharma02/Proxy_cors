import React, { useEffect, useState } from "react";
import axios from "axios";

function Jokes() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await axios.get("/api/jokes");
        setJokes(response.data);
      } catch (error) {
        console.error("Error fetching jokes:", error);
      }
    };

    fetchJokes();
  }, []);

  return (
    <div>
      <h2>Jokes</h2>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>{joke.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Jokes;
