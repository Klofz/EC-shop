import { useQuery } from "@tanstack/react-query";

// import MessageBox from "./MessageBox";
import merchService from "@/services/merch";
import ContentMerchItem from "./ContentMerchItem";

export default Content;

function Content() {
  const resultMerch = useQuery({
    queryKey: ["merchAll"],
    queryFn: merchService.getAll,
  });

  if (resultMerch.isLoading) {
    return <div>loading data...</div>;
  }

  const merchArr = resultMerch.data ?? [];

  const MerchandiseItemList = merchArr.map((merch) => (
    <ContentMerchItem key={merch.id} merch={merch} />
  ));

  return (
    <>
      <div>
        <img
          src={"landing_banner.jpg"}
          // height={250}
          // width={250}
          alt="casa"
        />
      </div>

      <div className="flex flex-colgrid flex-1 gap-4 overflow-auto p-4 ">
        {MerchandiseItemList}
      </div>
    </>
  );
}
