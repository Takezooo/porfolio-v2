"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({ className, ...props }) {
	return (
		<SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "relative inline-flex h-10.5 w-[100%] md:w-48 shrink-0 items-center rounded-full border border-input bg-muted p-1 transition-all focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {/* The sliding "active tab" */}
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "absolute left-1 top-0.7 h-8 w-[calc(50%-0.30rem)] rounded-full bg-neutral-50 shadow-sm transition-transform data-[state=checked]:translate-x-[100%]"
        )}
      />

      {/* Labels for the two “tabs” */}
      <span className="z-10 flex-1 text-center text-neutral-50 font-semibold data-[state=unchecked]">
        CYBER
      </span>
      <span className="z-10 flex-1 text-center text-neutral-50 font-semibold data-[state=checked]">
        DEV
      </span>
			
		</SwitchPrimitive.Root>
	);
}

export { Switch };
