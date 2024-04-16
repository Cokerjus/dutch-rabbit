import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import * as DialogPrimitive from "@radix-ui/react-dialog";

import { Button } from "./ui/button";

function Contract() {
  return (
    <Dialog>
      <DialogTrigger>Contract</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <div className="flex justify-between items-center">
            0x48a510A3394C2A07506d10910EBEFf3E25b7a3f1
            <DialogPrimitive.Close>
              <Button
                onClick={() =>
                  navigator.clipboard.writeText(
                    "0x48a510A3394C2A07506d10910EBEFf3E25b7a3f1"
                  )
                }
              >
                Copy
              </Button>
            </DialogPrimitive.Close>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default Contract;
