"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { objectToQueryString } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import Select from "@/components/ui/Inputs/select";
import { Input } from "@/components/ui/input";

export const FormSchema = z.object({
  location: z
    .string({
      required_error: "Please select a location.",
    })
    .min(1, "The field could not be empty"),
  houseType: z.string(),
  minPrice: z.string(),
  maxPrice: z.string(),
});

export type FormType = z.infer<typeof FormSchema>;

interface SearchFormProps {
  locations: HouseLocation[];
  houseTypes: HouseType[];
}

export function MainSearchForm({ locations, houseTypes }: SearchFormProps) {
  const router = useRouter();

  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      location: "",
      houseType: "",
      minPrice: "",
      maxPrice: "",
    },
  });

  function onSubmit(data: FormType) {
    const queryString = objectToQueryString(data);

    const origin = window.location.origin;

    const redirectTo = `${origin}/results?${queryString}`;
    router.push(redirectTo);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-top flex-wrap"
      >
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <Select<FormType>
              field={{ ...field }}
              fieldName={field.name}
              values={locations}
              form={form}
              displayName={"location"}
            />
          )}
        />
        <FormField
          control={form.control}
          name="houseType"
          render={({ field }) => (
            <Select
              field={{ ...field }}
              fieldName={field.name}
              values={locations}
              form={form}
              displayName={"type"}
            />
          )}
        />
        <FormField
          control={form.control}
          name="minPrice"
          render={({ field }) => (
            <FormItem className="py-6 px-4 flex flex-col xl:border-white">
              <FormLabel className="text-white text-sm uppercase">
                Min price
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent text-white w-[200px] "
                  placeholder="0"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maxPrice"
          render={({ field }) => (
            <FormItem className="py-6 px-4 flex flex-col xl:border-white">
              <FormLabel className="text-white text-sm uppercase">
                Min price
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent text-white w-[200px]"
                  placeholder="0"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="py-6 px-4 self-end">
          <Button
            className="self-end uppercase flex items-center"
            variant={"outline"}
            type="submit"
          >
            Submit
            <ArrowRight color="#333" size={18} />
          </Button>
        </div>
      </form>
    </Form>
  );
}
