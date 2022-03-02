import React from "react";

import Form from "./form";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CancelIcon from "@mui/icons-material/Cancel";

export default function FormContainer() {
  return (
    <>
      <div className="flex justify-center lg:hidden">
        <img
          src="https://relative.fi/images/Logo-Light.svg"
          width="200px"
          className="pt-4"
        />
      </div>
      <div className="sm:my-[1rem] sm:mx-[8vw] mx-[-11vw] lg:my-[3rem] min-w-[458px] scale-75 sm:transform-none">
        <div className="flex">
          <span className="text-sm cursor-pointer">
            <ArrowBackIosNewIcon className="!h-[0.7rem]" />
            Back
          </span>
          <span className="text-sm ml-auto cursor-pointer">
            Close
            <CancelIcon className="!h-[0.7rem]" />
          </span>
        </div>
        <Form />
      </div>
    </>
  );
}
