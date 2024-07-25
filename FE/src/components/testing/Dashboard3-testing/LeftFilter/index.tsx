import { Bird, Rabbit, Turtle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import SelectorBased from "./SelectorBased";

export default LeftFilter;

function LeftFilter() {
  return (
    <div className="relative hidden flex-col items-start gap-8 md:flex">
      <form className="grid w-full items-start gap-6">
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">
            Settings
          </legend>

          <SelectorBased />

          <div className="grid gap-3">
            <Label htmlFor="temperature">Temperature</Label>
            <Input
              id="temperature"
              type="number"
              placeholder="0.4"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="top-p">Top P</Label>
              <Input
                id="top-p"
                type="number"
                placeholder="0.7"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="top-k">Top K</Label>
              <Input
                id="top-k"
                type="number"
                placeholder="0.0"
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">
            Messages
          </legend>
          <div className="grid gap-3">
            <Label htmlFor="role">Role</Label>
            <Select defaultValue="system">
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="system">
                  System
                </SelectItem>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="assistant">
                  Assistant
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="You are a..."
              className="min-h-[9.5rem]"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
