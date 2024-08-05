//
import MenuNavBar from "@/components/MenuNavBar";
import SearchProductViewer from "./SearchedMerchandiseListViewer";
import SheetContainer from "./FilterSidePanel/SheetContainer";

export default FilterSearchPage;

function FilterSearchPage() {
  const FilterModal = true == true ? <SheetContainer /> : "";

  return (
    <div>
      <MenuNavBar />
      <main className="flex">
        {FilterModal}
        <SearchProductViewer />
      </main>
    </div>
  );
}
