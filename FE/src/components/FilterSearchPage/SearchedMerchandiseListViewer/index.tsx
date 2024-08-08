import { useQuery } from "@tanstack/react-query";

import MerchItem from "./MerchItem";
import queryService from "@/services/db_queries";
import useAppStore from "@/services/Store";
import filtersUtility from "@/utilities/filters";

export default SearchProductViewer;

function SearchProductViewer() {
  const { choosenProductCategories, choosenBrands } = useAppStore();

  const resultProducts = useQuery({
    queryKey: ["getAllProducts"],
    queryFn: queryService.getAll_Products,
  });

  if (resultProducts.isLoading) {
    return <div>loading data...</div>;
  }

  let productArr = resultProducts.data ?? [];

  //Product Category filter
  productArr = filtersUtility.categoryFilter(
    productArr,
    choosenProductCategories
  );

  //Brand filter
  productArr = filtersUtility.brandFilter(productArr, choosenBrands);

  //Price filter

  //And here some form of pagination
  // For now lets cut it to just 30 items
  //I have to implement a progressive infinite scroll for this
  productArr = productArr.slice(0, 15);

  const MerchandiseItemList = productArr.map((merch) => (
    <MerchItem key={merch.id} merch={merch} />
  ));

  return (
    <div className="flex flex-col bg-muted/80 p-4 gap-y-3">
      {MerchandiseItemList}
    </div>
  );
}
