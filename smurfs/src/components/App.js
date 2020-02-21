import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getData } from "../actions";
import Smurfs from "./smurfList";
import PostForm from "./postForm";
import axios from "axios"


function App(props) {
  
const handleData = e => {
  e.preventDefault();
  props.getData();
}

  return (
<body className="smurfs">
<div className="App">
  <h1>
    Welcome To Le pays Maudit </h1>

  {props.isFetchingData ? (
    <div> Currently traveling to Le pays Madit! Hold Please!</div>
  ) : (
    <button onClick={handleData}>Go to Smurf Village</button> )}
  <Smurfs />
  <PostForm />
</div>
</body>
  );
}

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  }
}
export default connect(
  mapStateToProps,
  { getData }
)(App);