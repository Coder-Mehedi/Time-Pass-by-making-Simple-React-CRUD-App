import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addCoder,
  updateCoder,
  clearCurrent
} from "../../actions/coderActions";

const AddCoder = ({ coders, addCoder, current, clearCurrent, updateCoder }) => {
  useEffect(() => {
    if (current !== null) {
      setCoder(current);
    } else {
      setCoder({ firstName: "", lastName: "" });
    }
  }, [coders, current]);
  const [coder, setCoder] = useState({ firstName: "", lastName: "" });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      coder.id = coders.length + 1;
      addCoder(coder);
      clearForm();
    } else {
      updateCoder(coder);
      clearCurrent();
      clearForm();
    }
  };

  const clearForm = () => setCoder({ firstName: "", lastName: "" });

  const onChange = e => {
    setCoder({ ...coder, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3 className="center yellow">
        {current ? "Edit Coder" : "Add New Coder"}
      </h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={onChange}
          name="firstName"
          value={coder.firstName}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={onChange}
          name="lastName"
          value={coder.lastName}
        />
        <br />
        <button
          type="submit"
          value="Add New Coder"
          className="btn waves-effect waves-light"
        >
          {current ? "Edit Coder" : "Add Coder"}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  coders: state.coders.coders,
  current: state.coders.current
});
export default connect(mapStateToProps, {
  addCoder,
  updateCoder,

  clearCurrent
})(AddCoder);
