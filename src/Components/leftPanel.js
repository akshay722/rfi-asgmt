import React from "react";

export default function LeftPanel() {
  return (
    <div className="bg-left-background h-full hidden lg:inline-grid w-[25vw] float-left  justify-items-center">
      <img
        src="https://relative.fi/images/Logo-Light.svg"
        width="200px"
        className="pt-4"
      />
      <img src={require("../Images/box-large.png")} className="pb-10 pl-5" />
    </div>
  );
}
