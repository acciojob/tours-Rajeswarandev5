import React, { useState } from "react";

const Tour = ({ id, name, image, price, info, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  const shortInfo = info.substring(0, 200);

  return (
    <div className="tour">
      <img src={image} alt={name} />

      <div className="tour-info">
        <div className="tour-header">
          <h2>{name}</h2>
          <span>${price}</span>
        </div>

        <p>
          {showMore ? info : `${shortInfo}${info.length > 200 ? "..." : " "}`}

          {info.length > 200 && (
            <button
              className="info-btn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "See less" : "Show more"}
            </button>
          )}
        </p>

        <button
          className="delete-btn"
          onClick={() => removeTour(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Tour;