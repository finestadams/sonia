import { useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import {
  CREATED_AT,
  DropDownOptions,
  FILE_NAME_ASC,
  FILE_NAME_DESC,
} from "@/type/types";
import { DropdownInterface, SortOption } from "@/interfaces/general.interfaces";

export default function DropDown({ onChange, sortBy }: DropdownInterface) {
  const [open, setOpen] = useState(false);

  const handleClick = (value: SortOption) => {
    onChange(value);
    setOpen(false);
  };

  const dropDownLabel = useMemo(() => {
    if (sortBy === CREATED_AT) {
      return "Created At";
    } else if (sortBy === FILE_NAME_ASC) {
      return "Filename Ascending";
    } else if (sortBy === FILE_NAME_DESC) {
      return "Filename Descending";
    } else {
      return "Select Sort Order";
    }
  }, [sortBy]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-max">
          {dropDownLabel}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0 cursor-pointer">
        <div className="flex flex-col">
          {DropDownOptions.map(
            (option: { value: SortOption; label: string }) => (
              <Button
                key={option.value}
                variant="ghost"
                className={cn(
                  "px-5 py-3 text-sm w-full",
                  option.value === sortBy && "bg-gray-500 text-white"
                )}
                onClick={() => handleClick(option.value as SortOption)}
              >
                {option.label}
              </Button>
            )
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
