import React from "react";
import "./Sidebar.css";

const SideBar = ({ changeView, detailView, feedBackForm }) => {
  return (
    <div className="Sidebar">
      <div className="reader">
        <div className="user">
          <img
            src="https://cdn4.iconfinder.com/data/icons/aami-web-internet/64/aami14-40-128.png"
            alt="user-avatar"
          />
        </div>
        <div className="news">
          <h4>Hi Reader</h4>
          <p>Here's your news!</p>
        </div>
      </div>
      <div className="view-toggle">
        <div>
          <h2>View Toggle</h2>
        </div>
        <div className="icon-wrapper">
          <div className="icons" onClick={changeView}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-065_bullets_list-128.png"
              alt="icons"
            />
          </div>
          <div className="icons" onClick={detailView}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/user-interface-169/32/menu-128.png"
              alt="icons"
            />
          </div>
        </div>
      </div>
      <div className="feedback">
        <div>
          <h2>Have a feedback?</h2>
        </div>
        <div>
          <button onClick={feedBackForm}>We're listening</button>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
