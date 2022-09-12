import { useState } from "react";
import "./add.css";
function Add(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="add">
      <button
        className="button-32"
        onClick={() => (isOpen === false ? setIsOpen(true) : setIsOpen(false))}
      >
        Add new movie
      </button>

      {isOpen ? (
        <div>
          <div className="inputs">
            <h2>Title:</h2>
            <input
              onChange={(e) => props.handleTitleChange(e.target.value)}
              type="text"
              placeholder="Name of the movie"
            />
            <h2>Image:</h2>
            <input
              type="text"
              onChange={(e) => props.handleImgChange(e.target.value)}
              placeholder="URL"
            />
            <h2>Rating:</h2>
            <input
              type="number"
              onChange={(e) => props.handleRatingChange(e.target.value)}
              placeholder="0-10"
            />
            <h2>Clip:</h2>
            <input
              type="text"
              onChange={(e) => props.handleClipChange(e.target.value)}
              placeholder="Clip URL"
            />
          </div>
          <br></br>
          <button className="button-32" onClick={() => props.handleClick()}>
            save
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Add;
