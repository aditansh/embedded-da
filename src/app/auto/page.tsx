"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Page() {
  const [isGraph, setIsGraph] = React.useState(false);
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
        <div className="text-center text-xl font-medium">Current Status</div>
      </div>
      <div className="flex flex-col pt-10">
        <div className="text-lg font-medium">Crop: Wheat</div>
        <div className="text-lg font-medium">Days: 10</div>
        <div className="text-lg font-medium">Soil Moisture: 400</div>
        <div className="text-lg font-medium">Temperature: 30</div>
        <div className="text-lg font-medium">Humidity: 15</div>

        <div className="pt-5 text-center text-lg font-medium">
          Irrigation is not required
        </div>

        {/* <Button className="mt-4 w-full" onClick={() => setIsGraph(true)}>
          View Graphs
        </Button> */}
      </div>
    </div>
  );
}
