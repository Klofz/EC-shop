import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router-dom";

import MerchItemInfo from "./MerchItem";
import queryService from "@/services/db_queries";

export default InfoPage;

function InfoPage() {
  const match = useMatch("/merch/:url");

  const resultProducts = useQuery({
    queryKey: ["getAllProducts"],
    queryFn: queryService.getAll_Products,
  });

  if (resultProducts.isLoading) {
    return <div>loading data...</div>;
  }

  const productArr = resultProducts.data ?? [];
  const product = match
    ? productArr.find(
        (item) => item.id === String(match.params.url),
      )
    : null;

  if (!product) {
    return (
      <div>Could not find the particular product...</div>
    );
  }
  return (
    <div className=" flex h-full items-center min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
      <MerchItemInfo merch={product} />
    </div>
  );
}
