import React from "react";

import CodeSandBox from "../Helpers/codeSandBox";

export default function Header() {
  return (
    <div className="flex m-2.5 pb-2 items-center text-white text-lg border-b-2 border-header-border">
      <CodeSandBox />
      <h3 className="ml-2">Create Multi User Lot</h3>
    </div>
  );
}
