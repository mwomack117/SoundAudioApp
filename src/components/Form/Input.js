import React from "react";

const style = {
  width: "30%",
  marginLeft: "25px"
};

export const Input = props => (
  <div style={style} className="form-group">
    <input className="form-control" {...props} />
  </div>
);
