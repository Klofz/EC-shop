import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default ValueBased;

function ValueBased() {
  return (
    <div className="grid gap-3">
      <Label htmlFor="temperature">Temperature</Label>
      <Input
        id="temperature"
        type="number"
        placeholder="0.4"
      />
    </div>
  );
}
