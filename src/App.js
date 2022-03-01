import logo from "./logo.svg";
import "./App.css";

import Form from "./Components/form";

function App() {
  return (
    <div className="App">
      <h1 className="font-bold underline">B</h1>
      <div className="bg-left-background h-full w-1/4 float-left">
        <img src="https://relative.fi/images/Logo-Light.svg" width="200px" />
        <img src="C:\Users\metal\Downloads\box-large.png" />
      </div>
      <div className="h-full w-3/4 float-right">
        <Form />
      </div>
    </div>
  );
}

export default App;
