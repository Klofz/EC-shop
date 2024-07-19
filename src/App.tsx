// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MenuNavBar from "./components/MenuNavBar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <MenuNavBar />

      <Routes>
        {/* <Route path="/authors" element={<Authors />} />
        <Route path="/books" element={<Books />} />
        <Route path="/newbook" element={<NewBook />} /> */}
      </Routes>
    </div>
  );
}

export default App;
