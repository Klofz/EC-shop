import MerchandiseItem from "./MerchandiseItem";
// import MessageBox from "./MessageBox";
import { merchandiseArr_mock } from "@/services/merchandise";

export default SearchProductViewer;

function SearchProductViewer() {
  const MerchandiseList = merchandiseArr_mock.map(
    (merch) => (
      <MerchandiseItem key={merch.id} merch={merch} />
    ),
  );

  return (
    <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
      {MerchandiseList}

      <div className="flex-1" />

      {/* <MessageBox /> */}
    </div>
  );
}
