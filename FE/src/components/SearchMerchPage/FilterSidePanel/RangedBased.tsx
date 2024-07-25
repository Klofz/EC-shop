import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default RangedBased;

function RangedBased() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-3">
        <Label htmlFor="top-p">Top P</Label>
        <Input id="top-p" type="number" placeholder="0.7" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="top-k">Top K</Label>
        <Input id="top-k" type="number" placeholder="0.0" />
      </div>
    </div>
  );
}
