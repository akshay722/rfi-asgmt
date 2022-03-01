import React from "react";

import CodeSandBox from "../Helpers/codeSandBox";

export default function Button() {
  return (
    <div className="bg-green h-12 m-2.5 mt-10 text-white text-center">
      <button
        type="submit"
        className="inline-flex items-center from-button-color1 to-button-color2 bg-gradient-to-b rounded-2xl px-5 py-3"
      >
        <CodeSandBox />
        <span className="pl-2">Create Lot</span>
      </button>
    </div>
  );
}
