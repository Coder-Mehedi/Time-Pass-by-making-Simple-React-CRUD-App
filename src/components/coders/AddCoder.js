import React, { useState, useEffect } from "react";

const AddCoder = ({ coders, setCoders, current, setCurrent }) => {
  useEffect(() => {
    if (current !== null) {
      setCoder(current);
    } else {
      setCoder({});
    }
  }, [coders, current]);
  const [coder, setCoder] = useState({});

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      coder.id = coders.length + 1;
      setCoders([...coders, coder]);
      clearForm();
    } else {
      updateCoder(coder);
      clearCurrent();
      clearForm();
    }
  };

  const updateCoder = coderToUpdate => {
    const coder = coders.map(coder =>
      coder.id === coderToUpdate.id ? coderToUpdate : coder
    );
    setCoders(coder);
  };

  const clearCurrent = () => setCurrent(null);
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

export default AddCoder;
