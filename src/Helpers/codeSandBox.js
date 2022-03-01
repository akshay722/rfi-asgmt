import React from "react";

export default function CodeSandBox() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      // color="linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8)"
      className="h-5 w-5"
      fill="white"
      // stroke="url(#grad1)"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          {/* <stop offset="0%" style="stp-color:rgb(255,255,0);stop-opacity:1" />
          <stop offset="50%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
          <stop
            offset="100%"
            style="stop-color:rgb(255,255,0);stop-opacity:1"
          /> */}
        </linearGradient>
      </defs>
      {/* <title /> */}
      <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z" />
    </svg>
  );
}
// linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))
// bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
