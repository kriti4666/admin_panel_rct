import React, { useState } from "react";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/auth/action";

const initValues = {
  username: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [formData, setFormData] = useState(initValues);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter your Username...",
      errorMessage:
        "Username should be 3-16 charaters and shouldn't include any specail character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter Email...",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    navigate("/login");
  };

  // console.log(formData);

  return (
    <div className="flex items-center min-h-screen bg-gray-50">
      <div className="flex-1 flex-row h-full max-w-4xl mx-auto bg-white rounded-xl shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="h-full md:h-auto md:w-1/2 bg-blue-500 rounded-xl sm:w-full sm:max-w-sm mx-auto ">
            <img
              className="object-fit w-full h-full"
              src="https://cashey.net/wp-content/uploads/2022/10/canceled-order-2.png"
              alt="bg-img"
            />
          </div>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full ">
              <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-blue-500">
                Signup
              </h2>
              <p className="mt-4 text-center">
                Hey! enter your details to create your account.
              </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit} >
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
                    className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
