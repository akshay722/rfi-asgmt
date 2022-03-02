import React from "react";

export default function Header() {
  return (
    <div className="flex my-2.5 pb-2 items-center text-white text-lg border-b-2 border-header-border">
      <img src={require("../Images/box-small.png")} />
      <h1 className="ml-2 text-xl">Create Multi User Lot</h1>
    </div>
  );
}
