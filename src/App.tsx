// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
import "./App.css";
import MenuNavBar from "./components/MenuNavBar";
import FilterSidePanel from "./components/FilterSidePanel";
// import Dashboard3_testing from "./components/testing/dashboard3-testing";
import SearchProductViewer from "./components/SearchedMerchandiseListViewer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <div className="grid h-screen w-full ">
        <div className="flex flex-col">
          <MenuNavBar />
          <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
            <FilterSidePanel />
            <SearchProductViewer />
          </main>
        </div>
      </div>

      {/* <Dashboard3_testing /> */}

      {/*<Routes>
        <Route path="/authors" element={<Authors />} />
        <Route path="/books" element={<Books />} />
        <Route path="/newbook" element={<NewBook />} />
      </Routes> */}
    </div>
  );
}

export default App;
