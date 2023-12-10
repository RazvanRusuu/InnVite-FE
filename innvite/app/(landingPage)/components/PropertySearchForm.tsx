"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import React from "react";
import { useRouter } from "next/navigation";

import FieldComponent from "@/components/ui/SelectFormField";
import { Button } from "@/components/ui/button";
import { objectToQueryString } from "@/lib/utils";
import { Form, FormField } from "@/components/ui/form";

export const FormSchema = z.object({
  location: z
    .string({
      required_error: "Please select a location.",
    })
    .min(1),
  propertyType: z.string(),
  minPrice: z.number(),
  maxPrice: z.number(),
});

export type FormType = z.infer<typeof FormSchema>;

interface SearchFormProps {
  locations: PropertyLocation[];
  propertyTypes: PropertyType[];
}

export function PropertySearchForm({
  locations,
  propertyTypes,
}: SearchFormProps) {
  const router = useRouter();
  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      location: "",
      propertyType: "",
      minPrice: 0,
      maxPrice: 0,
    },
  });

  function onSubmit(data: FormType) {
    const queryString = objectToQueryString(data);

    const origin = window.location.origin;

    console.log(data);

    const redirectTo = `${origin}/results?${queryString}`;
    // router.push(redirectTo);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-top">
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FieldComponent
              field={field}
              fieldName={field.name}
              values={locations}
              form={form}
              displayName={"location"}
            />
          )}
        />
        <FormField
          control={form.control}
          name="propertyType"
          render={({ field }) => (
            <FieldComponent
              field={field}
              fieldName={field.name}
              values={locations}
              form={form}
              displayName={"type"}
            />
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
