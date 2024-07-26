//
import MenuNavBar from "@/components/MenuNavBar";
import FilterSidePanel from "./FilterSidePanel";
import SearchProductViewer from "./SearchedMerchandiseListViewer";

export default FilterSearchPage;

function FilterSearchPage() {
  return (
    <div className="grid h-screen w-full ">
      <div className="flex flex-col">
        <MenuNavBar />
        <main className="flex flex-1 gap-4 overflow-auto p-4">
          <FilterSidePanel />
          <SearchProductViewer />
        </main>
      </div>
    </div>
  );
}
