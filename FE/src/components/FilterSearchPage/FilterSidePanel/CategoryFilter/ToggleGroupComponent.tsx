//
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { Product_Category } from "@/types";

interface ProductBranch {
  name: string;
  modifierArr: string[];
}

interface Props {
  productCategory: Product_Category;
  handleCategoryChanges: (name: string, modifierArr: string[]) => void;
  productTree: ProductBranch[];
}

export default ToggleGroupComponent;

function ToggleGroupComponent({
  productCategory,
  handleCategoryChanges,
  productTree,
}: Props) {
  //This is fucking horrible, i need to put a proper filter for all this mess
  const arrvaluesOfToggleGroup = productTree.filter(
    (branch) => branch.name === productCategory.name
  );
  const valuesOfToggleGroup = arrvaluesOfToggleGroup[0]?.modifierArr ?? [];

  const handleValueChange = (valueArr: string[]) => {
    handleCategoryChanges(productCategory.name, valueArr);
  };

  const categoryArr = [productCategory, ...productCategory.children];
  const productCategoriesToggles = categoryArr.map((category) => {
    return (
      <ToggleGroupItem
        className="bg-slate-100"
        size="sm"
        key={category.id}
        value={category.id}
        aria-label={`Toggle brand ${category.name}`}
      >
        {category.name}
      </ToggleGroupItem>
    );
  });

  return (
    <div className="pb-3">
      <h4 className="text-base font-semibold text-foreground">
        {productCategory.name}
      </h4>
      <ToggleGroup
        className="justify-start flex-wrap m-2"
        // className="h-20 justify-start overflow-x-auto overflow-y-hidden"
        type="multiple"
        value={valuesOfToggleGroup}
        onValueChange={handleValueChange}
      >
        {productCategoriesToggles}
      </ToggleGroup>
    </div>
  );
}
