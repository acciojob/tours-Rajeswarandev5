import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import Loading from "./loading";
import Tours from "./tours";

const API_URL = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = () => {
    setLoading(true);

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours((currentTours) => {
      return currentTours.filter((tour) => tour.id !== id);
    });
  };

  if (loading) {
    return (
      <main id="main">
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main id="main">
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </main>
    );
  }

  return (
    <main id="main">
      <h1>Tours</h1>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;