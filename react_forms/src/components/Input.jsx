import React, { useState } from "react";
import "../App.css"

const Input = ({ id, label, errorMessage, onChange, name, value,type, placeholder }) => {
  const [focused, setFocused] = useState(false);

 

  return name === "password" ? (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className="text-sm">
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </a>
        </div>
      </div>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={name}
          required
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() =>
            setFocused(true)
          }
          focused={focused.toString()}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      
        />
        <span className={`text-red-500 text-xs p-1 ${focused ? "" : "hidden"}`}>
          {errorMessage}
        </span>
      </div>
    </div>
  ) : (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={name}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onFocus={() =>
            setFocused(true)
          }
          focused={focused.toString()}
        />
        <span>
          {errorMessage}
        </span>
      </div>
    </div>
  );
};

export default Input;
