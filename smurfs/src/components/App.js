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
  <h1 className="welcome" style={{ Background: "red", color: "white", border: "solid 2px #86a8e7", width: "30%", margin: "2% auto", padding: "3%"}}>
    Welcome To Le Pays Maudit </h1>

  {props.isFetchingData ? (
    <div> Currently traveling to Le pays Madit! Hold Please!</div>
  ) : (
    <button style={{ padding: "1%", borderRadius: "30px",border: "solid 2px #86a8e", background: "linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)"}} onClick={handleData}>Go to Smurf Village</button> )}
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