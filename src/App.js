import "./App.css";

import FormContainer from "./Components/formContainer";
import LeftPanel from "./Components/leftPanel";

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <div className="h-full w-full lg:w-3/4 float-right">
        <FormContainer />
      </div>
    </div>
  );
}

export default App;
