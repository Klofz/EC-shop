//

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import qMiddleware from "@/services/query_middleware";
import useAppStore from "@/services/Store";
import ToggleGroupComponent from "./ToggleGroupComponent";

interface ProductBranch {
  name: string;
  modifierArr: string[];
}

export default CategoryFilter;

function CategoryFilter() {
  const { choosenProductCategories, updateChoosenProductCategories } =
    useAppStore();

  const [productTree, setProductTree] = useState<ProductBranch[]>([]);

  const resultProductCategories = useQuery({
    queryKey: ["getProductCategories"],
    queryFn: qMiddleware.retriveOrdered_productCategories,
  });

  if (resultProductCategories.isLoading) {
    return <div>loading data...</div>;
  }

  const handleCategoryChanges = (name: string, modifierArr: string[]) => {
    // console.log(modifierArr);

    const newProductTree = Array.from(productTree);
    const position = productTree.findIndex((branch) => branch.name === name);

    if (position === -1) {
      newProductTree[newProductTree.length] = { name, modifierArr };
    } else {
      newProductTree[position] = { name, modifierArr };
    }

    const newProductCategoryList: string[] = [];

    for (const branch of newProductTree) {
      for (const category of branch.modifierArr) {
        newProductCategoryList.push(category);
      }
    }

    setProductTree(newProductTree);
    updateChoosenProductCategories(newProductCategoryList);
  };

  const productCategories = resultProductCategories.data ?? [];

  const productCategoriesToggles = productCategories.map((productCategory) => {
    return (
      <ToggleGroupComponent
        key={productCategory.id}
        productCategory={productCategory}
        handleCategoryChanges={handleCategoryChanges}
        productTree={productTree}
      />
    );
  });

  return (
    <div>
      <h3 className="text-lg font-bold text-foreground">Categorias:</h3>
      {productCategoriesToggles}
    </div>
  );
}
