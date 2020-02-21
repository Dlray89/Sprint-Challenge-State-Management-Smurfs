import React from "react";
import { connect } from "react-redux";

const smurfList = props => {
  return (
    <div>
      {props.Smurfs.map(smurf => (
        <div key={smurf.id}>
          <p>
            Hey Im {smurf.name} <br />
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
