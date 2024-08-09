//
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

import { Product_Category } from "@/types";

interface Props {
  productCategory: Product_Category;
  handleCategoryChanges: (
    name: string,
    modifierArr: string[],
  ) => void;
  productTree: Map<string, string[]>;
}

export default ToggleGroupComponent;
//---------------------------------------------------------
//Beginning of function
function ToggleGroupComponent({
  productCategory,
  handleCategoryChanges,
  productTree,
}: Props) {
  const arrValuesOfToggleGroup =
    productTree.get(productCategory.id) ?? [];

  const handleValueChange = (valueArr: string[]) => {
    handleCategoryChanges(productCategory.id, valueArr);
  };

  const productCategoriesToggles = (
    category: Product_Category,
  ) => {
    return (
      <ToggleGroupItem
        className="bg-slate-100 data-[state=on]:bg-slate-200"
        size="sm"
        key={category.id}
        value={category.id}
        aria-label={`Toggle brand ${category.name}`}
      >
        {category.name}
      </ToggleGroupItem>
    );
  };

  return (
    <div className="pb-3">
      <h4 className="text-base font-semibold text-foreground">
        {productCategory.name}
      </h4>
      <ToggleGroup
        className="justify-start flex-wrap m-2"
        // className="h-20 justify-start overflow-x-auto overflow-y-hidden"
        type="multiple"
        value={arrValuesOfToggleGroup}
        onValueChange={handleValueChange}
      >
        {productCategoriesToggles(productCategory)}
        {productCategory.children.map(
          productCategoriesToggles,
        )}
      </ToggleGroup>
    </div>
  );
}
