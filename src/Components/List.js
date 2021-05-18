import React from "react";
import "../Components/List.css";

const List = ({ list, loading, removeHandler, popUp }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="list-group mb-4 unorderedList">
      {list.map((item) => (
        <li key={item.id} className="list-group-item win">
          <div onClick={() => popUp(item.link)}>
            {item.title}
            <br />
            {item.summary.length > 110
              ? item.summary.substr(0, 110) + "..."
              : item.summary}
          </div>
          <div className="image-wrapper" onClick={() => removeHandler(item.id)}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/everyday-2/64/x_cross_delete_stop-128.png"
              alt="Into"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
export default List;
