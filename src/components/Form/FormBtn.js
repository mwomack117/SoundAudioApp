import React from "react";

export const FormBtn = props => (
  <button
    {...props}
    style={{ marginLeft: 25, marginTop: 10 }}
    className="btn btn-success"
  >
    {props.children}
  </button>
);
