//
import { useQuery } from "@tanstack/react-query";
import qMiddleware from "@/services/query_middleware";
import useAppStore from "@/services/Store";
import ToggleGroupComponent from "./ToggleGroupComponent";

export default CategoryFilter;

function CategoryFilter() {
  const {
    choosenProductCategories_Map,
    updateChoosenProductCategories_Map,
    updateChoosenProductCategories,
  } = useAppStore();

  const productTree = choosenProductCategories_Map;
  const setProductTree = updateChoosenProductCategories_Map;

  const resultProductCategories = useQuery({
    queryKey: ["getProductCategories"],
    queryFn: qMiddleware.retriveOrdered_productCategories,
  });

  if (resultProductCategories.isLoading) {
    return <div>loading data...</div>;
  }

  const productCategories =
    resultProductCategories.data ?? [];

  const productCategoriesToggles = productCategories.map(
    (productCategory) => {
      return (
        <ToggleGroupComponent
          key={productCategory.id}
          productCategory={productCategory}
          handleCategoryChanges={handleCategoryChanges}
          productTree={productTree}
        />
      );
    },
  );

  function handleCategoryChanges(
    name: string,
    modifierArr: string[],
  ) {
    const newProductTree = new Map(productTree);
    newProductTree.set(name, modifierArr);

    const newChoosenProductCategories: string[] = [];

    for (const branch of newProductTree) {
      for (const category of branch[1]) {
        newChoosenProductCategories.push(category);
      }
    }

    setProductTree(newProductTree);
    updateChoosenProductCategories(
      newChoosenProductCategories,
    );
  }

  return (
    <div>
      <h3 className="text-lg font-bold text-foreground">
        Categorias:
      </h3>
      {productCategoriesToggles}
    </div>
  );
}
