import React from "react";

const Input = (props) => {
  console.log(props)

  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
    )

}

export default Input;