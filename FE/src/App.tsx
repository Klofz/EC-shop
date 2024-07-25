//
import { Route, Routes } from "react-router-dom";
import "./App.css";

import SearchMerchPage from "./components/SearchMerchPage";
import Dashboard3_testing from "./components/testing/Dashboard3-testing/dashboard3-testing";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/main" element={<SearchMerchPage />} />
        <Route
          path="/DB3-testing"
          element={<Dashboard3_testing />}
        />
      </Routes>
    </div>
  );
}

export default App;
