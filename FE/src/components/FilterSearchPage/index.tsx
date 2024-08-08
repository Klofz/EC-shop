//
import MenuNavBar from "@/components/MenuNavBar";
import SearchProductViewer from "./SearchedMerchandiseListViewer";
import SheetContainer from "./FilterSidePanel/SheetContainer";

export default FilterSearchPage;

function FilterSearchPage() {
  return (
    <div>
      <MenuNavBar />
      <main>
        <SheetContainer />
        <SearchProductViewer />
      </main>
    </div>
  );
}
