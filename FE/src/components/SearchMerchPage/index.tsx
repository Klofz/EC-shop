//
import MenuNavBar from "@/components/MenuNavBar";
import FilterSidePanel from "@/components/SearchMerchPage/FilterSidePanel/index";
import SearchProductViewer from "@/components/SearchMerchPage/SearchedMerchandiseListViewer";

export default SearchMerchPage;

function SearchMerchPage() {
  return (
    <div className="grid h-screen w-full ">
      <div className="flex flex-col">
        <MenuNavBar />
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <FilterSidePanel />
          <SearchProductViewer />
        </main>
      </div>
    </div>
  );
}
