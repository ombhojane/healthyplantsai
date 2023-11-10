import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Plants Disease Detection",
    content: (
      <>
        <p>Monitoring Plants health with Healthy Plants AI</p>
        
        
        <div className="mt-2">
          <a href="//link" target="_blank" rel="noopener noreferrer">AI Model</a> |{" "}
          <a href="//link" target="_blank" rel="noopener noreferrer">Docs</a> |{" "}
          <a href="//code-link" target="_blank" rel="noopener noreferrer">Code</a>
        </div>
      </>
    ),
  }
];

export const FreeCounter = () => {
  return (
    <div className="px-3">
      {features.map((feature) => (
        <Card key={feature.title} className="bg-[#192339] border-none text-white mb-4">
          <CardContent className="py-3">
            <h3 className="text-sm font-semibold">{feature.title}</h3>
            {feature.content}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
