"use client";

import * as z from "zod";
import { LeafyGreen, LeafIcon, MessageSquare, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";

import { BotAvatar } from "@/components/bot-avatar";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/ui/empty";
import { useProModal } from "@/hooks/use-pro-modal";

import { formSchema } from "./constants";
import { Card } from "@/components/ui/card";


const CodePage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const tools = [

    {
      label: 'Preventive Measures',
      icon: LeafIcon,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      href: '/image',
    },
  ];

  const isLoading = form.formState.isSubmitting;
  
  

  return ( 
    <div>
      <Heading
        title="Plant Disease Detection"
        description="Our most advanced conversation model."
        icon={LeafyGreen}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ width: '100%', maxWidth: '1200px' }}>
          {/* Iframe Option */}
          <iframe
            src="https://ombhojane-gemini-healthyplants.hf.space"
            frameBorder="0"
            style={{ width: '100%', height: '600px' }}
          ></iframe>

          {/* You can add other components, sections, or content as needed */}
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
}
 
export default CodePage;

