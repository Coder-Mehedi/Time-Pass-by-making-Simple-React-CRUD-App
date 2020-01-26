import React from "react";
import { connect } from "react-redux";
import { deleteCoder, setCurrent } from "../../actions/coderActions";

const CoderList = ({ coder, setCurrent, deleteCoder }) => {
  return (
    <div>
      <ul className="collection">
        <li className="collection-item">
          {coder.firstName} {coder.lastName}
          <i
            className="material-icons right"
            onClick={() => deleteCoder(coder.id)}
          >
            delete
          </i>
          <i className="material-icons right" onClick={() => setCurrent(coder)}>
            edit
          </i>
        </li>
      </ul>
    </div>
  );
};

export default connect(null, { deleteCoder, setCurrent })(CoderList);
