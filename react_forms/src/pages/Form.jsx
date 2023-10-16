import React, { useState } from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import BasicDetails from "./MultistepForm/BasicDetails";
import FileUpload from "./MultistepForm/FileUpload";

const Form = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  // Define state variables for each step
  const [basicDetails, setBasicDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
    },
  });

  const [fileUpload, setFileUpload] = useState({
    files: [],
    geolocationStatus: "Not Captured",
  });


  const handleNext = () => {
    if (activeStep === 0) {
      // Handle validation for the first step (Basic Details) here
      // If validation is successful, move to the next step
      setActiveStep((cur) => cur + 1);
    } else if (activeStep === 1) {
      // Handle validation for the second step (File Upload) here
      // If validation is successful, move to the next step
      setActiveStep((cur) => cur - 1);
    }
    // Add additional steps and validation logic as needed
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div>
      <div className="w-full px-24 py-4">
        <Stepper activeStep={activeStep}>
          <Step onClick={() => setActiveStep(0)}>
            <UserIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
              >
                Step 1
              </Typography>
              <Typography
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Basic Details.
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(1)}>
            <CogIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue-gray" : "gray"}
              >
                Step 2
              </Typography>
              <Typography
                color={activeStep === 1 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Upload your Files.
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <BuildingLibraryIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 2 ? "blue-gray" : "gray"}
              >
                Step 3
              </Typography>
              <Typography
                color={activeStep === 2 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Choose the option.
              </Typography>
            </div>
          </Step>
        </Stepper>
        {activeStep === 0 && (
          <BasicDetails
            data={basicDetails}
            setData={setBasicDetails}
            handleNext={handleNext}
          />
        )}

        {activeStep === 1 && (
          <FileUpload
            data={fileUpload}
            setData={setFileUpload}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
        
      </div>
    </div>
  );
};

export default Form;
