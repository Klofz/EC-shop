import LeftFilter from "./LeftFilter";
import ProductViewer from "./ProductViewer";

export default MainDB3;

function MainDB3() {
  return (
    <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
      <LeftFilter />
      <ProductViewer />
    </main>
  );
}
