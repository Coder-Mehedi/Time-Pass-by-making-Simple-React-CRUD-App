import React, { useState } from "react";
import AddCoder from "./AddCoder";
import CoderList from "./CoderList";
import { connect } from "react-redux";

const Coders = ({ coders }) => {
  return (
    <div>
      <AddCoder />
      {coders.map(coder => (
        <CoderList coder={coder} key={coder.id} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  coders: state.coders.coders
});

export default connect(mapStateToProps, {})(Coders);
