// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MenuNavBar from "./components/MenuNavBar";
import FilterSidePanel from "./components/FilterSidePanel";
import Dashboard_testing from "./components/testing/testing";
import SearchedProductListPage from "./components/SearchedProductsList";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <div className="grid h-screen w-full pl-[56px]">
        <div className="flex flex-col">
          {/* <MenuNavBar />
      <FilterSidePanel />*/}
        </div>
      </div>
      <SearchedProductListPage />

      <Dashboard_testing />

      {/*<Routes>
        <Route path="/authors" element={<Authors />} />
        <Route path="/books" element={<Books />} />
        <Route path="/newbook" element={<NewBook />} />
      </Routes> */}
    </div>
  );
}

export default App;
