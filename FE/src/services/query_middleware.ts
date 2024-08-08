//Since product-categories can potentially be a deeply nested array and it comes from the db, in a unorganized manner, I added this:
//Orders product-categories array in its tree like structure for ease of handling

import { Product_Category } from "@/types";
import queryService from "./db_queries";

const qMiddleware = {
  retriveOrdered_productCategories,
};

export default qMiddleware;

async function retriveOrdered_productCategories() {
  const unOrderedArr = await queryService.getAll_ProductCategories();
  const OrderedMap = new Map<string, Product_Category>();
  const OrderedArray: Product_Category[] = [];

  //adds an [] changing the type to Product_Category and creates a map
  for (const element of unOrderedArr) {
    element.children = [];
    OrderedMap.set(element.id, element as Product_Category);
  }

  for (const element of OrderedMap) {
    if (element[1].parentId) {
      const parentElement = OrderedMap.get(element[1].parentId);
      if (parentElement) {
        parentElement.children.push(element[1]);
      }
    }
  }

  for (const element of OrderedMap) {
    if (element[1].parentId == null) {
      OrderedArray.push(element[1]);
    }
  }

  return OrderedArray;
}
