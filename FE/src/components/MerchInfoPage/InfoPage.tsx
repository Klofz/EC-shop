import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router-dom";

import merchService from "@/services/merch";
import MerchItemInfo from "./MerchItem";

export default InfoPage;

function InfoPage() {
  const match = useMatch("/merch/:url");

  const resultMerch = useQuery({
    queryKey: ["merchAll"],
    queryFn: merchService.getAll,
  });

  if (resultMerch.isLoading) {
    return <div>loading data...</div>;
  }

  const merchArr = resultMerch.data ? resultMerch.data : [];
  const merchItem = match
    ? merchArr.find(
        (merch) =>
          merch.merch_url === String(match.params.url),
      )
    : null;

  if (!merchItem) {
    return (
      <div>Could not find the particular product...</div>
    );
  }
  return (
    <div className=" flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
      <MerchItemInfo merch={merchItem} />
    </div>
  );
}
