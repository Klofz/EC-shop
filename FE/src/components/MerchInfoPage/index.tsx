//
import MenuNavBar from "@/components/MenuNavBar";
import InfoPage from "@/components/MerchInfoPage/InfoPage";

export default MerchInfoPage;

function MerchInfoPage() {
  return (
    <div className="grid h-screen w-full ">
      <div className="flex flex-col">
        <MenuNavBar />
        <main className="flex flex-1 gap-4 overflow-auto p-4">
          <InfoPage />
        </main>
      </div>
    </div>
  );
}
