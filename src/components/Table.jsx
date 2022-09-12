import { useState } from "react";
import Add from "./Add";
import "bootstrap/dist/css/bootstrap.min.css";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { IconButton } from "@mui/material";

import "./table.css";
import MyVerticallyCenteredModal from "./Videomodal";

function Table() {
  const [movies, setMovies] = useState([
    {
      title: "The lion king",
      img: "data:image/jpeg;base64,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",
      rating: 10,
      clip: "https://www.youtube.com/embed/4CbLXeGSDxg",
    },
  ]);
  const [movie, setMovie] = useState({
    title: "",
    img: "",
    rating: 0,
    clip: "",
  });
  const handleTitleChange = (value) => {
    setMovie({
      ...movie,
      title: value,
    });
  };
  const handleClipChange = (value) => {
    setMovie({
      ...movie,
      clip: value,
    });
  };
  const handleImgChange = (value) => {
    setMovie({
      ...movie,
      img: value,
    });
  };
  const handleRatingChange = (value) => {
    setMovie({
      ...movie,
      rating: value,
    });
  };
  const handleClick = () => {
    console.log(movie);
    setMovies([...movies, movie]);
  };
  const addRating = (index) => {
    movies[index].rating++;
    setMovies([...movies]);
  };
  const removeRating = (index) => {
    movies[index].rating--;
    setMovies([...movies]);
  };
  const removeMovie = (index) => {
    movies.splice(index, 1);
    setMovies([...movies]);
  };
  const nothing = () => {
    console.log("abort delete");
  };
  return (
    <div className="table">
      <Add
        handleTitleChange={handleTitleChange}
        handleClick={handleClick}
        handleRatingChange={handleRatingChange}
        handleImgChange={handleImgChange}
        handleClipChange={handleClipChange}
      />
      <div>
        {movies.map((movie, index) => (
          <div key={index} className="movielist">
            <img src={movie.img} alt="" className="movieimg" />
            <div className="titlediv">
              <h3>
                <i>{movie.title}</i>
              </h3>
            </div>
            <div>
              <IconButton color="error">
                <SentimentDissatisfiedIcon
                  onClick={() => removeRating(index)}
                  color="error"
                  fontSize="large"
                ></SentimentDissatisfiedIcon>
              </IconButton>
              <span className="rating"> {movie.rating} </span>
              <IconButton color="success">
                <SentimentSatisfiedIcon
                  fontSize="large"
                  color="success"
                  onClick={() => addRating(index)}
                ></SentimentSatisfiedIcon>
              </IconButton>
            </div>
            <button
              className="button-24"
              onClick={() => {
                if (window.confirm("You sure you want to remove this movie?")) {
                  removeMovie(index);
                } else {
                  nothing();
                }
              }}
            >
              REMOVE
            </button>
            <div>
              <MyVerticallyCenteredModal clip={movie.clip} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Table;
