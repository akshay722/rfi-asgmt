import logo from "./logo.svg";
import "./App.css";

import Form from "./Components/form";

function App() {
  return (
    <div className="App">
      <div className="bg-left-background h-full w-1/4 float-left inline-grid justify-items-center">
        <img src="https://relative.fi/images/Logo-Light.svg" width="200px" />
        <img src={require("./Images/box-large.png")} />
      </div>
      <div className="h-full w-3/4 float-right">
        <Form />
      </div>
    </div>
  );
}

export default App;
