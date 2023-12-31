import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckIcon, ArrowDownNarrowWide } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ControllerRenderProps,
  FieldValues,
  UseFormReturn,
  useFormContext,
} from "react-hook-form";

interface SelectProps<TForm extends FieldValues> {
  form: UseFormReturn<TForm>;
  field: ControllerRenderProps<TForm>;
  values: Array<{ name: string; [key: string]: any }>;
  fieldName: string;
  displayName: string;
}

export default function Select<TName extends FieldValues>({
  field,
  values,
  fieldName,
  displayName,
  ...props
}: SelectProps<TName>) {
  const { setValue } = useFormContext();
  return (
    <FormItem className="py-6 px-4 flex flex-col xl:border-white">
      <FormLabel className="text-white text-sm uppercase">
        {displayName}
      </FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              role="combobox"
              className={cn(
                "w-[200px] justify-between bg-transparent text-white",
                !field.value && "text-muted-foreground"
              )}
            >
              {field.value
                ? values?.find((el) => el.name === field.value)?.name
                : `Select a ${displayName}`}
              <ArrowDownNarrowWide className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput
              placeholder={`Search ${displayName}s...`}
              className="h-9"
            />
            <CommandEmpty>No {displayName} found.</CommandEmpty>
            <CommandGroup>
              {values?.map((el) => (
                <CommandItem
                  value={el.name}
                  key={el.name}
                  onSelect={() => {
                    setValue(fieldName, el.name);
                  }}
                >
                  {el.name}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      el.name === field.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  );
}
