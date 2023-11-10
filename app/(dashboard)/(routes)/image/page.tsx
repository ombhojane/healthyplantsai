"use client";
import { ArrowRight, LeafIcon, LeafyGreen } from "lucide-react";

import { Heading } from "@/components/heading";
import { Card, CardFooter } from "@/components/ui/card";



import React from 'react';
import router from "next/router";
import { cn } from "@/lib/utils";

const Prevention = () => {

  const tools = [
   
    {
      label: 'Remedies and Treatment',
    icon: LeafIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/video',
    },
  ];

return ( 
  <div>
    <Heading
      title="Plant Disease Detection"
      description="Our most advanced conversation model."
      icon={LeafyGreen}
      iconColor="text-violet-500"
      bgColor="bg-violet-500/10"
    />
     
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', height: '100vh' }}>
    <div style={{ width: '100%', maxWidth: '1200px' }}>
      {/* Iframe Option */}
      <iframe
        src="https://plantpreventions.streamlit.app/?embed=true"
        frameBorder="0"
        style={{ width: '100%', height: '600px' }}
      ></iframe>

    </div>
  </div>

  <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                {tool.icon && <tool.icon className={cn("w-8 h-8", tool.color)} />}
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  
 );

};

 export default Prevention;