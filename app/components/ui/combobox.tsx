"use client";

import { Check, ChevronsUpDown, X } from "lucide-react";
import * as React from "react";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";

interface ComboboxProps {
  options: { label: string; value: string }[];
  value?: string;
  className?: string;
  error?: boolean;
  placeholder?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
}

const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      options,
      value,
      placeholder = "option",
      className,
      error,
      onChange,
    }: ComboboxProps,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    ref: any,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [popoverWidth, setPopoverWidth] = React.useState<number | null>(null);
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const buttonRef = React.useRef<any>(null);
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    React.useEffect(() => {
      if (buttonRef.current) {
        setPopoverWidth(buttonRef.current.offsetWidth);
      }
    }, [buttonRef?.current?.offsetWidth]);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <div className={cn(className)}>
          <PopoverTrigger asChild>
            <Button
              ref={(node) => {
                if (typeof ref === "function") {
                  ref(node);
                } else if (ref && "current" in ref) {
                  ref.current = node;
                }
                buttonRef.current = node;
              }}
              aria-expanded={open}
              className={cn(
                `w-full justify-between rounded-lg font-normal ${
                  !value && "text-muted-foreground hover:text-muted-foreground"
                }`,
                error && "border-2 border-destructive",
                "ring-offset-background ",
                "focus:outline-none placeholder:text-muted-foreground",
              )}
              id="button"
              role="combobox"
              variant="outline"
            >
              {value
                ? options.find((option) => option?.value === value)?.label
                : `Select ${placeholder}`}
              {value ? (
                <X
                  className={cn(
                    "ml-2 pt-[1px] h-4 w-4",
                    "shrink-0 cursor-pointer",
                    "opacity-50 hover:opacity-100",
                  )}
                  onClick={() => onChange("")}
                />
              ) : (
                <ChevronsUpDown
                  className={cn(
                    "ml-2 h-4 w-4",
                    "pointer-events-none shrink-0 opacity-50",
                  )}
                />
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className={cn("xl:w-full rounded-lg p-0")}
            style={{ width: popoverWidth ? `${popoverWidth}px` : "auto" }}
          >
            <Command>
              <CommandInput placeholder={`Search ${placeholder}`} />
              <CommandEmpty>No {placeholder} found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option?.value ?? ""}
                    onSelect={() => {
                      onChange(
                        option?.value === value ? "" : option?.value ?? "",
                      );
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option?.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {option?.label ?? ""}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </div>
      </Popover>
    );
  },
);

Combobox.displayName = "Combobox";

export { Combobox };
