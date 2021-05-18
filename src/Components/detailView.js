import React from "react";
import "../Components/detailView.css";

const Detail = ({ list, loading, removeHandler, popUp }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="detail-section">
      {list.map((item) => (
        <div className="details">
          <div onClick={() => popUp(item.link)} key={item.id}>
            <h3>
              {item.title.length > 15
                ? item.title.substring(0, 15) + "..."
                : item.title}
            </h3>
            <p>
              {item.summary.length > 25
                ? item.summary.substring(0, 25) + "..."
                : item.summary}
            </p>
            <p>{item.published}</p>
          </div>
          <img
            onClick={() => removeHandler(item.id)}
            src="https://cdn1.iconfinder.com/data/icons/everyday-2/64/x_cross_delete_stop-128.png"
            alt="inot"
          />
        </div>
      ))}
    </div>
  );
};
export default Detail;
