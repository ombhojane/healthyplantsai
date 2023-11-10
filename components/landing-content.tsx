"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Image to Plant Disease Detection",
    description: "Effortlessly identify plant diseases by uploading images for quick and accurate diagnosis.",
  },
  {
    title: "Preventive Measures",
    description: "Receive proactive suggestions to prevent the occurrence of plant diseases and maintain overall plant health.",
  },
  {
    title: "Remedies and Treatments",
    description: "Access detailed information on remedies and treatments for specific plant diseases, ensuring effective solutions.",
  },
  {
    title: "Useful Articles",
    description: "Explore a wealth of articles covering various aspects of plant health, diseases, and gardening tips for a comprehensive knowledge base.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {features.map((item) => (
          <Card key={item.title} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
};
