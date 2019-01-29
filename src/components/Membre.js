import React, { Fragment } from "react";

const Membre = ({ nom, age, children, hideName, handleChange }) => {
  return (
    <Fragment>
      <h2 style={{
        backgroundColor: age < 30 ? 'purple' : 'yellow',
        color: age < 30 ? 'white' : 'black',

      }}>
        {nom.toUpperCase()}: {age} </h2>
      <input
        type='text'
        value={nom}
        onChange={handleChange} />
      <button onClick={hideName}>X</button>
      {children ? <p>{children}</p> : <Fragment />}
    </Fragment >
  );
};

export default Membre;
