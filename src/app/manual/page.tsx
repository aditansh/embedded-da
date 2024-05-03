"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const formSchema = z.object({
  cropType: z.union([
    z.literal("Wheat"),
    z.literal("Groundnuts"),
    z.literal("Sugarcane"),
    z.literal("Pulse"),
    z.literal("Maize"),
    z.literal("Garden Flowers"),
    z.literal("Coffee"),
    z.literal("Paddy"),
    z.literal("Potato"),
  ]),
  cropDays: z.string().regex(/^[0-9]+$/),
  soilMoisture: z.string().regex(/^[0-9]+$/),
  temperature: z.string().regex(/^[0-9]+$/),
  humidity: z.string().regex(/^[0-9]+$/),
});

export default function Page() {
  const [isResult, setIsResult] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cropType: undefined,
      cropDays: undefined,
      soilMoisture: undefined,
      temperature: undefined,
      humidity: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setIsResult(true);
  }

  return (
    <div className="px-[5%] py-5">
      <div className="relative flex h-10 items-center justify-center">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2"
          asChild
        >
          <Link href="/">
            <ChevronLeft />
          </Link>
        </Button>
        <div className="text-center text-xl font-medium">
          {isResult ? "Result" : "Predict"}
        </div>
      </div>
      {isResult ? (
        <div className="flex flex-col pt-10">
          <div className="text-lg font-medium">
            Crop: {form.getValues().cropType}
          </div>
          <div className="text-lg font-medium">
            Days: {form.getValues().cropDays}
          </div>
          <div className="text-lg font-medium">
            Soil Moisture: {form.getValues().soilMoisture}
          </div>
          <div className="text-lg font-medium">
            Temperature: {form.getValues().temperature}
          </div>
          <div className="text-lg font-medium">
            Humidity: {form.getValues().humidity}
          </div>

          <div className="pt-5 text-center text-lg font-medium">
            Irrigation is {Math.random() > 0.5 ? "" : "not"} required
          </div>

          <Button
            onClick={() => {
              setIsResult(false);
              form.reset();
            }}
            className="mt-4 w-full"
          >
            Predict Again
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="cropType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Crop Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a crop" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Wheat">Wheat</SelectItem>
                      <SelectItem value="Groundnuts">Groundnuts</SelectItem>
                      <SelectItem value="Sugarcane">Sugarcane</SelectItem>
                      <SelectItem value="Pulse">Pulse</SelectItem>
                      <SelectItem value="Maize">Maize</SelectItem>
                      <SelectItem value="Garden Flowers">
                        Garden Flowers
                      </SelectItem>
                      <SelectItem value="Coffee">Coffee</SelectItem>
                      <SelectItem value="Paddy">Paddy</SelectItem>
                      <SelectItem value="Potato">Potato</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cropDays"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Crop Days</FormLabel>
                  <Input type="number" {...field} min={0} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="soilMoisture"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Soil Moisture</FormLabel>
                  <Input type="number" {...field} min={0} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="temperature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Temperature</FormLabel>
                  <Input type="number" {...field} min={0} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="humidity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Humidity</FormLabel>
                  <Input type="number" {...field} min={0} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Predict
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}
