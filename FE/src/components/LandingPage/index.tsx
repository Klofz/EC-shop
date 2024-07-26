//
import MenuNavBar from "../MenuNavBar";
import Content from "./Content";

export default LandingPage;

function LandingPage() {
  return (
    <div className="grid h-screen w-full ">
      <div className="flex flex-col">
        <MenuNavBar />
        <main className="grid flex-1 overflow-auto p-4">
          <Content />
        </main>
      </div>
    </div>
  );
}
