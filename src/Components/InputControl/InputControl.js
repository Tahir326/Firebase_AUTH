import React from "react";

function InputControl(props) {
  return (
    <div className="flex flex-col gap-2">
      {props.label && <label className="font-bold text-lg text-gray-700">{props.label}</label>}
      <input
        type="text"
        className="border border-gray-300 rounded-lg outline-none px-4 py-3 text-black hover:border-gray-400 focus:border-purple-600"
        {...props}
      />
    </div>
  );
}

export default InputControl;
