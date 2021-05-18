import React, { Component } from "react";
import "./styles.css";
import Sidebar from "./Components/Sidebar.js";
import List from "./Components/List";
import Pagination from "./Components/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./TotalList.json";
import Popup from "./Components/Popup";
import DetailedView from "./Components/detailView";
import SideDrawer from "./Components/SlideDrawer";
import BackDrop from "./Components/Backdrop";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: data,
      currentPage: 1,
      itemsPerPage: 5,
      loading: false,
      isEmptyState: true,
      isAddTripState: false,
      showPopup: false,
      selectedPost: null,
      drawerOpen: false
    };
  }
  removeHandler = (id) => {
    const tempArr = this.state.list.filter((item) => item.id !== id);
    this.setState({ list: tempArr });
  };
  changeView = () => {
    this.setState({ isEmptyState: false, isAddTripState: true });
    console.log("clicked change view");
  };
  detailView = () => {
    this.setState({ isEmptyState: true, isAddTripState: false });
    console.log("clicked detailed view");
  };
  popUp = (id) => {
    this.setState({
      showPopup: !this.state.showPopup,
      selectedPost: id
    });
    console.log(id, "close clicked");
  };
  drawerToggleClickHandler = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
    console.log("clicked listener");
  };
  backdropClickHandler = () => {
    this.setState({
      drawerOpen: false
    });
  };
  render() {
    const { list, itemsPerPage, currentPage } = this.state;
    const indexOfLastRec = currentPage * itemsPerPage;
    const indexOfFirstRec = indexOfLastRec - itemsPerPage;
    const currentList = list.slice(indexOfFirstRec, indexOfLastRec);
    const paginate = (pageNumber) => {
      this.setState({ currentPage: pageNumber });
    };
    let backdrop;
    if (this.state.drawerOpen) {
      backdrop = <BackDrop close={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Sidebar
          changeView={this.changeView}
          feedBackForm={this.drawerToggleClickHandler}
          detailView={this.detailView}
        />
        <SideDrawer show={this.state.drawerOpen} />
        {backdrop}
        {this.state.isEmptyState && (
          <div className="List">
            <List
              list={currentList}
              removeHandler={this.removeHandler}
              popUp={this.popUp}
            />
            <Pagination
              listPerPage={itemsPerPage}
              totalList={list.length}
              paginate={paginate}
            />
          </div>
        )}
        {this.state.isAddTripState && (
          <div className="List">
            <DetailedView
              list={currentList}
              removeHandler={this.removeHandler}
              popUp={this.popUp}
            />
            <Pagination
              listPerPage={itemsPerPage}
              totalList={list.length}
              paginate={paginate}
            />
          </div>
        )}
        {this.state.showPopup ? (
          <Popup closePopup={this.popUp} src={this.state.selectedPost} />
        ) : null}
      </div>
    );
  }
}

export default App;
