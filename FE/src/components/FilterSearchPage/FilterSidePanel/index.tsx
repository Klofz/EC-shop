//
import CategoryFilter from "@/components/FilterSearchPage/FilterSidePanel/CategoryFilter/CategoryFilter";
import BrandFilter from "@/components/FilterSearchPage/FilterSidePanel//BrandFilter";

export default FilterSidePanel;

function FilterSidePanel() {
  return (
    <div className="max-h-[50vh] overflow-y-auto mt-2 mb-3">
      <div className="border-t-2 pt-3">
        <CategoryFilter />
      </div>
      <div className="border-t-2 pt-3">
        <BrandFilter />
      </div>
    </div>
  );
}
