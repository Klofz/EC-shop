import { useQuery } from "@tanstack/react-query";

import MerchItem from "./MerchItem";
// import MessageBox from "./MessageBox";
import merchService from "@/services/merch";
import filtersUtility from "@/utilities/filters";
import filtersService from "@/services/filters";

export default SearchProductViewer;

function SearchProductViewer() {
  const resultMerch = useQuery({
    queryKey: ["merchAll"],
    queryFn: merchService.getAll,
  });

  const resultCurrentFilters = useQuery({
    queryKey: ["currentFilters"],
    queryFn: filtersService.getCurrentFilters,
    // refetchOnWindowFocus: false,
  });

  if (
    resultMerch.isLoading ||
    resultCurrentFilters.isLoading
  ) {
    return <div>loading data...</div>;
  }

  // let merchArr = resultMerch.data ? resultMerch.data : [];
  let merchArr = resultMerch.data ?? [];

  merchArr = filtersUtility.applyFilters(
    merchArr,
    resultCurrentFilters.data,
  );

  const MerchandiseItemList = merchArr.map((merch) => (
    <MerchItem key={merch.id} merch={merch} />
  ));

  return (
    <div className=" flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
      {MerchandiseItemList}

      <div className="flex-1" />

      {/* <MessageBox /> */}
    </div>
  );
}
