import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" bg-green-600 p-2 rounded-md shadow-sm text-white w-full hover:bg-green-700" type="submit">
        {props.button}
      </button>
    </div>
  );
};

export default Button;
