import React from "react";
import { connect } from "react-redux";

const Home = props => {
  console.log("----------------------");
  console.log(props);

  return (
    <div className="home">
      <h1>Welcome home!</h1>
      <p>Current time: {props.currentTime}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentTime: state.currentTime
  };
};
export default connect(mapStateToProps)(Home);
