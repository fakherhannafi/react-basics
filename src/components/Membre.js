import React, { Fragment } from "react";

const Membre = ({ nom, age, children }) => {
  return (
    <Fragment>
      <h2 style={{
        backgroundColor: age < 30 ? 'purple' : 'yellow',
        color: age < 30 ? 'white' : 'black',

      }}> Membre de la famille: {nom.toUpperCase()} et l'age {age} </h2>
      {children ? <p>{children}</p> : <Fragment />}
    </Fragment >
  );
};

export default Membre;
