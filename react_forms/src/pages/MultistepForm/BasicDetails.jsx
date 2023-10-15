import React from 'react'
import Input from '../../components/Input';

const BasicDetails = () => {

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
          errorMessage:
            "Phone number should be 10 digit number!",
          label: "Phone Number",
        //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
          htmlType: "input",
        },
        {
          id: 4,
          name: "address_line1",
          type: "text",
          placeholder: "Enter Address line 1...",
          errorMessage:
            "Address should be at least 10-20 characters!",
          label: "Address Line 1",
          required: true,
          htmlType: "input",
        },
        {
          id: 5,
          name: "address_line2",
          type: "text",
          placeholder: "Enter Address line ...",
          errorMessage:
            "Address should be at least 10-20 characters!",
          label: "Address Line 2",
          required: true,
          htmlType: "input",
        },
        {
          id: 6,
          name: "state",
          type: "text",
          placeholder: "Enter Address line ...",
          errorMessage:
            "Address should be at least 10-20 characters!",
          label: "State",
          required: true,
          htmlType: "select",
        },
        {
          id: 6,
          name: "pincode",
          type: "number",
          placeholder: "Enter Pincode ...",
          errorMessage:
            "Address should be 7 digit number!",
          label: "Pincode",
          required: true,
          htmlType: "input",
        },
        {
          id: 6,
          name: "country",
          type: "text",
          placeholder: "Enter Country ...",
          errorMessage:
            "Must be a country!",
          label: "Country",
          required: true,
          htmlType: "input",
        },
      ];
  return (
    <div>
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
              <form className="space-y-6"  >
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

             
              </form>
            </div>
          </div>
    </div>
  )
}

export default BasicDetails
