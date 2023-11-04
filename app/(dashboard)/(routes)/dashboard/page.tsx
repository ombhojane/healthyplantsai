"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { tools } from "@/constants";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Healthy Plants for a Healthy Planet
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
        Cultivate Healthier Gardens with AI: Detect, Defend, Thrive
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
      <br />
      <div className="bg-gray-100 p-4 rounded-lg w-4/5 mx-auto">
  <p>
    Discover how PlantGuard Pro can help you maintain thriving gardens and prevent plant diseases.
  </p>
  <p>
    Explore our knowledge base or get started now!
  </p>
</div>


          

    </div>
  );
}
