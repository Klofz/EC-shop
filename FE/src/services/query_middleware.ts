//Since product-categories can potentially be a deeply nested array and it comes from the db, in a unorganized manner, I added this:
//Orders product-categories array in its tree like structure for ease of handling

import { Product_Category } from "@/types";
import queryService from "./db_queries";

const qMiddleware = {
  retriveOrdered_productCategories,
};

export default qMiddleware;

async function retriveOrdered_productCategories() {
  const flatArray =
    await queryService.getAll_ProductCategories();

  const TreeStructure_Map = new Map<
    string,
    Product_Category
  >();
  const TreeStructure_Array: Product_Category[] = [];

  const OrderedByName_flatArray = flatArray.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  //adds an [] to the children field
  //But more importantly creates a map using as index the id of the element
  for (const element of OrderedByName_flatArray) {
    element.children = [];
    TreeStructure_Map.set(
      element.id,
      element as Product_Category,
    );
  }

  //Now I can assign the children into their parent with a forOF using the parent ID to search for him in the map
  //Using the map, avoids the need to use an explicit finderFunction to search for the parent in the array
  for (const element of TreeStructure_Map) {
    if (element[1].parentId) {
      const parentElement = TreeStructure_Map.get(
        element[1].parentId,
      );
      if (parentElement) {
        parentElement.children.push(element[1]);
      }
    }
  }

  for (const element of TreeStructure_Map) {
    if (element[1].parentId == null) {
      TreeStructure_Array.push(element[1]);
    }
  }

  return TreeStructure_Array;
}
