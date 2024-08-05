import { useQuery } from "@tanstack/react-query";

import merchService from "@/services/merch";
import ContentMerchItem from "./ContentMerchItem";

export default Content;

function Content() {
  const resultMerch = useQuery({
    queryKey: ["merchAll"],
    queryFn: merchService.getAll,
  });

  if (resultMerch.isLoading) {
    return (
      <div>
        <p>Loading products...</p>
      </div>
    );
  }

  const merchArr = resultMerch.data ?? [];

  const MerchandiseItemList = merchArr.map((merch) => (
    <ContentMerchItem key={merch.id} merch={merch} />
  ));

  return (
    <div className="min-w-80 p-3">
      <div className="flex items-center justify-center">
        <img
          className="min-h-28 max-h-[40vh] rounded-lg "
          src={"landing_banner.jpg"}
          alt="cute banner picture"
        />
      </div>

      <div className="pt-4 grid grid-cols-2 gap-y-3 justify-items-center">
        {MerchandiseItemList}
      </div>
    </div>
  );
}
