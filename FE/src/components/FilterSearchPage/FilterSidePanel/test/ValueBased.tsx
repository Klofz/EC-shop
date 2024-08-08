import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default ValueBased;

function ValueBased() {
  return (
    <div className="grid gap-3">
      <Label htmlFor="filter-02">Filter 02</Label>
      <Input
        id="filter-02"
        type="number"
        placeholder="0.4"
      />
    </div>
  );
}
