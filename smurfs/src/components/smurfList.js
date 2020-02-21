import React from "react";
import { connect } from "react-redux";
import Logo from "../images/thesmurfslogo.png"

const smurfList = props => {
  return (
    <div>
     <img src={Logo} alt="smurfs logo" width="200" style={{ margin: "0 auto"}}/>
      {props.Smurfs.map(smurf => (
        <div key={smurf.id}>

          <p  style={{ padding: "1%", borderRadius: "30px",border: "solid 2px #86a8e", background: "linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)", width: "40%", margin: "2% auto"}}>
            Name: {smurf.name} <br />
            age:{smurf.age} <br />
            Height:{smurf.height}
          </p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    Smurfs: state.Smurfs
  };
};
export default connect(mapStateToProps, {})(smurfList);
