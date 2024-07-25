import MessageBox from "./MessageBox";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ProductViewer() {
  return (
    <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
      <div className="flex-1" />

      <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
        />

        <div className="flex items-center p-3 pt-0">
          <MessageBox />
        </div>
      </form>
    </div>
  );
}
