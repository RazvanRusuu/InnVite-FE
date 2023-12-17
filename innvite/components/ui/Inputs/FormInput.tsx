import {
  ControllerRenderProps,
  FieldValues,
  UseFormReturn,
  useFormContext,
} from "react-hook-form";
import { useFormField } from "../form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "../input";

interface IInputProps<TForm extends FieldValues> {
  form?: UseFormReturn<TForm>;
  field: ControllerRenderProps<TForm>;
  label: string;
  placeholder?: string;
}

export default function FormInput<TName extends FieldValues>({
  field,
  label,
  placeholder,
}: IInputProps<TName>) {
  return (
    <FormItem>
      <FormLabel className="text-sm text-muted-foreground">{label}</FormLabel>
      <FormControl>
        <Input
          className="focus-visible:ring-2 border-gray-300 focus-visible:ring-slate-600"
          placeholder={placeholder}
          {...field}
        />
      </FormControl>
    </FormItem>
  );
}
