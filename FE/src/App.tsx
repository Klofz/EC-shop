//
import { Route, Routes } from "react-router-dom";
import "./AppBase.css";
import "./AppCustom.css";

import LandingPage from "@/components/LandingPage";
import FilterSearchPage from "@/components/FilterSearchPage/index";
import Dashboard3_testing from "@/components/testing/Dashboard3-testing/dashboard3-testing";
import ComboboxDemo from "@/components/testing/AloneTesting/index";
import MerchInfoPage from "@/components/MerchInfoPage";

function App() {
  return (
    <div className="min-w-80">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<FilterSearchPage />} />
        <Route path="/DB3-testing" element={<Dashboard3_testing />} />
        <Route path="/alone-testing" element={<ComboboxDemo />} />
        <Route path="/merch/:url" element={<MerchInfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
