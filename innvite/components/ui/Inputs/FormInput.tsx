import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { FormMessage, useFormField } from "../form";

import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "../input";
import { cn } from "@/lib/utils";

type ICustomInputProps<TForm extends FieldValues> = {
  field: ControllerRenderProps<TForm>;
  label: string;
  placeholder?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function FormInput<TName extends FieldValues>({
  field,
  label,
  placeholder,
  ...props
}: ICustomInputProps<TName>) {
  const { error } = useFormField();

  return (
    <FormItem>
      <FormLabel className="text-sm text-muted-foreground">{label}</FormLabel>
      <FormControl>
        <Input
          className={`${cn(
            "focus-visible:ring-2 border-gray-300 focus-visible:ring-slate-600 focus-visible:border-none h-10",
            error?.message && "ring-1 ring-red-400 focus-visible:ring-red-400"
          )}`}
          placeholder={placeholder}
          {...field}
          {...props}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
