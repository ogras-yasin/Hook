import "./styles.css";
import Calculator from "./component/Calculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseState from "./component/UseState";
import UseReducer from "./component/useReducer";
import UseEffect from "./component/UseEffect";

function App() {
  // return <Calculator path="/" exact element={Calculator} />
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Calculator />} />
        <Route path="/useState" exact element={<UseState />} />
        <Route path="/useReducer" exact element={<UseReducer />} />
        <Route path="/useEffect" exact element={<UseEffect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
