import React, { useState } from "react";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../redux/auth/action";

const initValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initValues);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Enter Email...",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Enter Password...",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault(); 
    dispatch(authenticate(formData));
  };

  // console.log(formData);

  return (
    <div>
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-700">
              SignIn
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleLogin} >
              {inputs.map((input) => (
                <Input
                  key={input.id}
                  id={input.id}
                  label={input.label}
                  errorMessage={input.errorMessage}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  value={formData[input.name]}
                  onChange={handelChange}
                />
              ))}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
     
    </div>
  );
};

export default Login;
