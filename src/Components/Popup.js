import React from "react";
import "./Popup.css";
class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <iframe
            width="100%"
            height="100%"
            scrolling="yes"
            allow="autoplay"
            title="me"
            src={this.props.src}
          ></iframe>
          <button className="btn-primary res" onClick={this.props.closePopup}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
export default Popup;
