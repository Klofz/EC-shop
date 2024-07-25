import {
  CornerDownLeft,
  Mic,
  Paperclip,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default MessageBox;

function MessageBox() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <Paperclip className="size-4" />
              <span className="sr-only">Attach file</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            Attach File
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <Mic className="size-4" />
              <span className="sr-only">
                Use Microphone
              </span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            Use Microphone
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Button
        type="submit"
        size="sm"
        className="ml-auto gap-1.5"
      >
        Send Message
        <CornerDownLeft className="size-3.5" />
      </Button>
    </>
  );
}
