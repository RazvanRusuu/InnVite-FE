"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField } from "@/components/ui/form";

import { TSignup, signupSchema } from "../data/schema";
import FormInput from "@/components/ui/Inputs/FormInput";
import { tree } from "next/dist/build/templates/app-page";

export default function SignupForm() {
  const [signIn, setSignIn] = useState<boolean>(true);

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
    console.log(form.formState.errors);
  }

  return (
    <Card className="border-none w-[360px] shadow-2xl">
      <CardHeader>
        <CardTitle className="text-xl text-slate-700 ">
          {signIn ? "Sign In" : "Sign Up"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {!signIn && (
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
            )}

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
                <FormInput
                  field={{ ...field }}
                  label="Password"
                  //   TODO check ts
                  type="password"
                />
              )}
            />
            {!signIn && (
              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormInput
                    field={{ ...field }}
                    label="Confirm Password"
                    //   TODO check ts

                    type="password"
                  />
                )}
              />
            )}
            <Button className="mt-6 w-full" type="submit">
              {signIn ? "Sign In" : "Sign Up"}
            </Button>
          </form>
          <div className="flex items-center justify-center">
            <span className="text-gray-700 text-sm text-center block">
              {signIn
                ? "You don't have an account yet?"
                : "Already have an account?"}
            </span>
            <Button
              type="button"
              onClick={() => {
                setSignIn(!signIn);
                form.clearErrors();
              }}
              className="font-bold"
              size={"sm"}
              variant={"link"}
            >
              {signIn ? "Sign up" : "Sign in"}
            </Button>
          </div>
          <span className="text-sm block text-center text-gray-700">or</span>
          <span className="text-gray-700 text-sm text-center block">
            Sign up with
            {/* Social signup */}
          </span>
        </Form>
      </CardContent>
    </Card>
  );
}
