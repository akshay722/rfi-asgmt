import React from "react";

export default function Header() {
  return (
    <div className="flex m-2.5 pb-2 items-center text-white text-lg border-b-2 border-header-border">
      <img src={require("../Images/box-small.png")} />
      <h3 className="ml-2">Create Multi User Lot</h3>
    </div>
  );
}
