import PropTypes from "prop-types";
import React, { useState } from "react";

function Persons({ data }) {
  const [value, setValue] = useState(data);

  const changeValue = (func) => {
    let temp = value + func;
    setValue(temp);
    console.log("🚀 ~ file: Persons.jsx:19 ~ Persons ~ l  value= ", temp);
  };

  return (
    <>
      <h1>لیست اشخاص</h1>
      مقدار : {value}
      <hr />
      <button onClick={() => changeValue(-5)}>-5</button>
      <button onClick={() => changeValue(+5)}>+5</button>
    </>
  );
}

Persons.propTypes = {
  data: PropTypes.number,
};

export default Persons;
