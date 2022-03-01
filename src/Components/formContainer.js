import React from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CancelIcon from "@mui/icons-material/Cancel";

import Form from "./form";

export default function FormContainer() {
  return (
    <div className="my-[3rem] mx-[9rem]">
      <div className="flex">
        <span className="text-sm">
          <ArrowBackIosNewIcon className="!h-[0.7rem]" />
          Back
        </span>
        <span className="text-sm ml-auto">
          Close
          <CancelIcon className="!h-[0.7rem]" />
        </span>
      </div>
      <Form />
    </div>
  );
}
