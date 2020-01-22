import React from "react";

const CoderList = ({ coder, handleEdit, handleDelete }) => {
  return (
    <div>
      <ul className="collection">
        <li className="collection-item">
          {coder.firstName} {coder.lastName}
          <i
            class="material-icons right"
            onClick={() => handleDelete(coder.id)}
          >
            delete
          </i>
          <i class="material-icons right" onClick={() => handleEdit(coder)}>
            edit
          </i>
        </li>
      </ul>
    </div>
  );
};

export default CoderList;
