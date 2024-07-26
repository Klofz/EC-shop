import MenuNavBar from "@/components/MenuNavBar";
import AsideDB3 from "./AsideDB3";
// import HeaderDB3 from "./HeaderDB3";
import MainDB3 from "./MainDB3";

export default function Dashboard3_testing() {
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <AsideDB3 />
      <div className="flex flex-col">
        {/* <HeaderDB3 /> */}
        <MenuNavBar />
        <MainDB3 />
      </div>
    </div>
  );
}
