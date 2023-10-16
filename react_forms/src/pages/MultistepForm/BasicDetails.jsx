import React from "react";
import Input from "../../components/Input";
import { Button } from "@material-tailwind/react";

let states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

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
    htmlType: "input",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Enter Email...",
    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
    htmlType: "input",
  },
  {
    id: 3,
    name: "phone_number",
    type: "number",
    placeholder: "Enter phone number...",
    errorMessage: "Phone number should be 10 digit number!",
    label: "Phone Number",
    //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
    htmlType: "input",
  },
  {
    id: 4,
    name: "line1",
    type: "text",
    placeholder: "Enter Address line 1...",
    errorMessage: "Address should be at least 10-20 characters!",
    label: "Address Line 1",
    required: true,
    htmlType: "input",
  },
  {
    id: 5,
    name: "line2",
    type: "text",
    placeholder: "Enter Address line ...",
    errorMessage: "Address should be at least 10-20 characters!",
    label: "Address Line 2",
    required: true,
    htmlType: "input",
  },
  {
    id: 6,
    name: "state",
    type: "text",
    placeholder: "Enter Address line ...",
    errorMessage: "Address should be at least 10-20 characters!",
    label: "State",
    required: true,
    htmlType: "select",
  },
  {
    id: 6,
    name: "pincode",
    type: "number",
    placeholder: "Enter Pincode ...",
    errorMessage: "Address should be 7 digit number!",
    label: "Pincode",
    required: true,
    htmlType: "input",
  },
  {
    id: 6,
    name: "country",
    type: "text",
    placeholder: "Enter Country ...",
    errorMessage: "Must be a country!",
    label: "Country",
    required: true,
    htmlType: "input",
  },
];

const BasicDetails = ({ data, setData, handleNext }) => {
  const handelChange = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="w-full h-full">
      <div className="mt-24 ">
        <form className="mt-10 grid grid-cols-3 md:grid-cols-2 gap-6">
          {inputs.map((input) =>
            input.htmlType === "select" ? (
              <select
                className="w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                name={input.name}
                id={input.id}
                key={input.id}
                onChange={handelChange}
              >
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            ) : (
              <Input
                key={input.id}
                id={input.id}
                label={input.label}
                errorMessage={input.errorMessage}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                value={data[input.name]}
                onChange={handelChange}
              />
            )
          )}
        </form>
      </div>
      <div className="mt-32 flex justify-between">
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};

export default BasicDetails;
