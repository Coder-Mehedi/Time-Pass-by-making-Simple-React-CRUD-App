import React, { useState } from "react";
import AddCoder from "./AddCoder";
import CoderList from "./CoderList";

const Coders = () => {
  const [coders, setCoders] = useState([
    { firstName: "Mehedi", lastName: "Hasan", id: 1 },
    { firstName: "Lancer", lastName: "Abir", id: 2 }
  ]);
  const [current, setCurrent] = useState(null);

  const handleEdit = coder => setCurrent(coder);

  const handleDelete = id => setCoders(coders.filter(coder => coder.id !== id));

  return (
    <div>
      <AddCoder
        coders={coders}
        setCoders={setCoders}
        current={current}
        setCurrent={setCurrent}
      />
      {coders.map(coder => (
        <CoderList
          coder={coder}
          key={coder.id}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Coders;
