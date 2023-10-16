import React, { useState } from "react";
import Input from "../../components/Input";
import { Button } from "@material-tailwind/react";

const inputs = [
  {
    id: 1,
    name: "file",
    type: "file",
    errorMessage:
      "Allow multiple file uploads with valid types PNG and PDF, up to a limit of 3 files!",
    label: "Upload Files",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
    htmlType: "input",
  },
];

const FileUpload = ({ data, setData, handleNext, handlePrev }) => {
  const [geolocationStatus, setGeolocationStatus] = useState("Not Captured");

  const handelChange = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };

  const captureGeolocation = () => {
    if ("geolocation" in navigator) {
      // Check if geolocation is available in the browser
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Successfully captured geolocation coordinates
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Update the status and display the coordinates
          setGeolocationStatus(`Captured: ${latitude}, ${longitude}`);
        },
        (error) => {
          // Handle errors, if any
          setGeolocationStatus("Error capturing geolocation");
        }
      );
    } else {
      // Geolocation is not available in this browser
      setGeolocationStatus("Geolocation not supported");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          {inputs.map((input) => (
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
          ))}
          <Button  onClick={captureGeolocation}>Capture Geolocation</Button>

          <div>
            <label className=" text-md font-medium leading-6 text-gray-900">
              Geolocation Status:
            </label>
            <div className="text-green-400 text-sm font-bold">{geolocationStatus}</div>
          </div>
        </form>
      </div>
      <div className="mt-32 flex justify-between">
        <Button onClick={handleNext}>Next</Button>
        <Button onClick={handlePrev}>Next</Button>
      </div>
    </div>
  );
};

export default FileUpload;
