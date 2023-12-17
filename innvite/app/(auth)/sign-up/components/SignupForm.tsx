"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { TSignup, signupSchema } from "../data/schema";
import { Input } from "@/components/ui/input";
import { fields } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";
import FormInput from "@/components/ui/Inputs/FormInput";

export default function SignupForm() {
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  function onSubmit(data: TSignup) {
    console.log(data);
  }

  return (
    <Card className="border-none min-w-[360px] p-4 shadow-lg bg-transparent backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="text-xl text-slate-700">Sign up</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormInput
                  field={{ ...field }}
                  label="Name"
                  placeholder="John Doe"
                />
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormInput
                  field={{ ...field }}
                  label="Email"
                  placeholder="johndoe@email.com"
                />
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormInput field={{ ...field }} label="Password" />
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormInput field={{ ...field }} label="Confirm Password" />
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
