//
import MenuNavBar from "@/components/MenuNavBar/index";
import Blat from "./normalCom";
// import Page from "./commser";

export default AloneTesting;

function AloneTesting() {
  const ola = (
    <div className="grid h-screen w-full ">
      <div className="flex flex-col">
        <MenuNavBar />
        <main className="grid flex-1 overflow-auto p-4">
          <div>
            <Blat.ComboboxDemo />
            <Blat.ComboA />
          </div>
        </main>
      </div>
    </div>
  );

  return <div>{ola}</div>;
}
